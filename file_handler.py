"""
Excel file handling operations for reading input files and writing output
"""
import pandas as pd
import os
from typing import Dict, Any
from logger_config import get_logger
from config import (
    INPUT_SHEET_NAME, 
    ERROR_CATEGORIES_SHEET_NAME,
    REQUIRED_INPUT_COLUMNS,
    REQUIRED_ERROR_CATEGORIES_COLUMNS,
    OUTPUT_COLUMNS
)

class ExcelFileHandler:
    """Handles all Excel file operations including reading and writing"""
    
    def __init__(self):
        self.logger = get_logger()
    
    def read_input_file(self, filepath: str) -> pd.DataFrame:
        """
        Read the input Excel file containing error logs
        
        Args:
            filepath (str): Path to the input Excel file
            
        Returns:
            pd.DataFrame: DataFrame containing the input data
            
        Raises:
            FileNotFoundError: If the input file doesn't exist
            ValueError: If required columns are missing
        """
        try:
            if not os.path.exists(filepath):
                raise FileNotFoundError(f"Input file not found: {filepath}")
            
            self.logger.info(f"Reading input file: {filepath}")
            df = pd.read_excel(filepath, sheet_name=INPUT_SHEET_NAME)
            
            self._validate_columns(df, REQUIRED_INPUT_COLUMNS, "input file")
            
            self.logger.info(f"Successfully read input file with {len(df)} rows")
            return df
            
        except Exception as e:
            self.logger.error(f"Error reading input file {filepath}: {str(e)}")
            raise
    
    def read_error_categories(self, filepath: str) -> pd.DataFrame:
        """
        Read the error categories Excel file
        
        Args:
            filepath (str): Path to the error categories Excel file
            
        Returns:
            pd.DataFrame: DataFrame containing error categories
            
        Raises:
            FileNotFoundError: If the error categories file doesn't exist
            ValueError: If required columns are missing
        """
        try:
            if not os.path.exists(filepath):
                raise FileNotFoundError(f"Error categories file not found: {filepath}")
            
            self.logger.info(f"Reading error categories file: {filepath}")
            df = pd.read_excel(filepath, sheet_name=ERROR_CATEGORIES_SHEET_NAME)
            
            self._validate_columns(df, REQUIRED_ERROR_CATEGORIES_COLUMNS, "error categories file")
            
            self.logger.info(f"Successfully read error categories file with {len(df)} categories")
            return df
            
        except Exception as e:
            self.logger.error(f"Error reading error categories file {filepath}: {str(e)}")
            raise
    
    def write_output_file(self, data: pd.DataFrame, filepath: str) -> None:
        """
        Write the processed data to output Excel file
        
        Args:
            data (pd.DataFrame): Processed data to write
            filepath (str): Path for the output Excel file
            
        Raises:
            ValueError: If data doesn't have required columns
        """
        try:
            self._validate_columns(data, OUTPUT_COLUMNS, "output data")
            
            self.logger.info(f"Writing output file: {filepath}")
            data.to_excel(filepath, index=False, sheet_name="Sheet1")
            
            self.logger.info(f"Successfully wrote output file with {len(data)} rows")
            
        except Exception as e:
            self.logger.error(f"Error writing output file {filepath}: {str(e)}")
            raise
    
    def _validate_columns(self, df: pd.DataFrame, required_columns: list, file_type: str) -> None:
        """
        Validate that DataFrame has all required columns
        
        Args:
            df (pd.DataFrame): DataFrame to validate
            required_columns (list): List of required column names
            file_type (str): Description of file type for error messages
            
        Raises:
            ValueError: If required columns are missing
        """
        missing_columns = [col for col in required_columns if col not in df.columns]
        if missing_columns:
            raise ValueError(f"Missing required columns in {file_type}: {missing_columns}")
