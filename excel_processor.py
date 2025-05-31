"""
Main orchestrator for the Excel processing system
"""
import pandas as pd
import os
from typing import Dict, Tuple
from logger_config import setup_logger, get_logger
from file_handler import ExcelFileHandler
from message_extractor import MessageExtractor
from error_categorizer import ErrorCategorizer
from config import (
    INPUT_FILE,
    ERROR_CATEGORIES_FILE,
    OUTPUT_FILE,
    OUTPUT_COLUMNS
)

class ExcelProcessor:
    """Main class that orchestrates the entire Excel processing workflow"""
    
    def __init__(self):
        self.logger = setup_logger()
        self.file_handler = ExcelFileHandler()
        self.message_extractor = MessageExtractor()
        self.error_categorizer = ErrorCategorizer()
    
    def process(self) -> None:
        """
        Main processing method that coordinates all operations
        """
        try:
            self.logger.info("Starting Excel processing workflow")
            
            input_df = self._load_input_data()
            categories_df = self._load_error_categories()
            
            self.error_categorizer.load_excel_categories(categories_df)
            
            message_info = self.message_extractor.extract_message_info(input_df)
            
            output_df = self._generate_output(input_df, message_info)
            
            self.file_handler.write_output_file(output_df, OUTPUT_FILE)
            
            self.logger.info("Excel processing completed successfully")
            
        except Exception as e:
            self.logger.error(f"Error in Excel processing: {str(e)}")
            raise
    
    def _load_input_data(self) -> pd.DataFrame:
        """
        Load and validate input data
        
        Returns:
            pd.DataFrame: Input data sorted by sequence
        """
        self.logger.info("Loading input data")
        df = self.file_handler.read_input_file(INPUT_FILE)
        
        df_sorted = df.sort_values('Sequence').reset_index(drop=True)
        self.logger.info(f"Loaded and sorted {len(df_sorted)} input records")
        
        return df_sorted
    
    def _load_error_categories(self) -> pd.DataFrame:
        """
        Load error categories data
        
        Returns:
            pd.DataFrame: Error categories data
        """
        self.logger.info("Loading error categories")
        return self.file_handler.read_error_categories(ERROR_CATEGORIES_FILE)
    
    def _generate_output(self, input_df: pd.DataFrame, message_info: Dict[int, Tuple[str, str, str]]) -> pd.DataFrame:
        """
        Generate the output DataFrame with categorized errors
        
        Args:
            input_df (pd.DataFrame): Input data
            message_info (Dict[int, Tuple[str, str, str]]): Message ID info for each Index
            
        Returns:
            pd.DataFrame: Output data with required columns
        """
        self.logger.info("Generating output data")
        
        output_data = []
        serial_number = 1
        
        unique_indices = sorted(input_df['Index'].unique())
        
        for index in unique_indices:
            try:
                message_id, date, time = message_info.get(index, ("UNKNOWN", "UNKNOWN", "UNKNOWN"))
                
                error_category = self.error_categorizer.categorize_messages_for_index(input_df, index)
                
                output_data.append({
                    OUTPUT_COLUMNS[0]: serial_number,
                    OUTPUT_COLUMNS[1]: message_id,
                    OUTPUT_COLUMNS[2]: error_category,
                    OUTPUT_COLUMNS[3]: date,
                    OUTPUT_COLUMNS[4]: time
                })
                
                serial_number += 1
                
            except Exception as e:
                self.logger.error(f"Error processing Index {index}: {str(e)}")
                output_data.append({
                    OUTPUT_COLUMNS[0]: serial_number,
                    OUTPUT_COLUMNS[1]: "ERROR",
                    OUTPUT_COLUMNS[2]: "Processing Error",
                    OUTPUT_COLUMNS[3]: "ERROR",
                    OUTPUT_COLUMNS[4]: "ERROR"
                })
                serial_number += 1
        
        output_df = pd.DataFrame(output_data)
        self.logger.info(f"Generated output with {len(output_df)} rows")
        
        return output_df

def main():
    """Main entry point for the Excel processing system"""
    try:
        processor = ExcelProcessor()
        processor.process()
        print("Excel processing completed successfully!")
        print(f"Output file generated: {OUTPUT_FILE}")
        print(f"Log file generated: Logger.log")
        
    except Exception as e:
        print(f"Error: {str(e)}")
        print("Check the log file for detailed error information")

if __name__ == "__main__":
    main()
