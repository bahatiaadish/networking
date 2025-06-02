"""
Extract unique message IDs from processing started messages
"""
import pandas as pd
import re
from typing import Dict, Tuple
from logger_config import get_logger
from config import PROCESSING_STARTED_PATTERN

class MessageExtractor:
    """Extracts unique message IDs from input data"""
    
    def __init__(self):
        self.logger = get_logger()
    
    def extract_message_info(self, df: pd.DataFrame) -> Dict[int, Tuple[str, str, str]]:
        """
        Extract unique message IDs, dates, and times for each Index
        
        Args:
            df (pd.DataFrame): Input DataFrame with columns Index, Sequence, Message text, Date, Time
            
        Returns:
            Dict[int, Tuple[str, str, str]]: Mapping of Index to (message_id, date, time)
        """
        try:
            self.logger.info("Starting message ID extraction")
            
            message_info = {}
            unique_indices = df['Index'].unique()
            
            self.logger.info(f"Processing {len(unique_indices)} unique indices")
            
            for index in unique_indices:
                try:
                    message_id, date, time = self._extract_for_index(df, index)
                    message_info[index] = (message_id, date, time)
                    
                except Exception as e:
                    self.logger.warning(f"Could not extract message info for Index {index}: {str(e)}")
                    message_info[index] = ("UNKNOWN", "UNKNOWN", "UNKNOWN")
            
            self.logger.info(f"Successfully extracted message info for {len(message_info)} indices")
            return message_info
            
        except Exception as e:
            self.logger.error(f"Error in message extraction: {str(e)}")
            raise
    
    def _extract_for_index(self, df: pd.DataFrame, index: int) -> Tuple[str, str, str]:
        """
        Extract message ID, date, and time for a specific Index
        
        Args:
            df (pd.DataFrame): Input DataFrame
            index (int): Index value to process
            
        Returns:
            Tuple[str, str, str]: (message_id, date, time)
            
        Raises:
            ValueError: If no processing started message found for the index
        """
        index_data = df[df['Index'] == index].copy()
        
        if index_data.empty:
            raise ValueError(f"No data found for Index {index}")
        
        processing_msgs = index_data[index_data['Message text'].str.contains('processing started', case=False, na=False)]
        
        if processing_msgs.empty:
            raise ValueError(f"No processing started message found for Index {index}")
        
        processing_row = processing_msgs.iloc[0]
        
        message_text = str(processing_row['Message text'])
        date = str(processing_row['Date'])
        time = str(processing_row['Time'])
        
        match = re.search(PROCESSING_STARTED_PATTERN, message_text, re.IGNORECASE)
        
        if match:
            message_id = match.group(1)
            self.logger.debug(f"Extracted message ID {message_id} for Index {index}")
            return message_id, date, time
        else:
            raise ValueError(f"No processing started message found for Index {index}")
