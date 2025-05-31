"""
Error categorization logic using Excel categories and custom functions
"""
import pandas as pd
import re
from typing import Dict, List, Callable
from logger_config import get_logger
from config import DEFAULT_ERROR_CATEGORY

class ErrorCategorizer:
    """Categorizes errors using Excel-based categories and custom functions"""
    
    def __init__(self):
        self.logger = get_logger()
        self.excel_categories = {}
        self.custom_functions = []
        self._setup_custom_functions()
    
    def load_excel_categories(self, categories_df: pd.DataFrame) -> None:
        """
        Load error categories from Excel DataFrame
        
        Args:
            categories_df (pd.DataFrame): DataFrame with ErrorText and Error Category columns
        """
        try:
            self.logger.info("Loading error categories from Excel")
            
            for _, row in categories_df.iterrows():
                error_text = str(row['ErrorText']).strip().lower()
                category = str(row['Error Category']).strip()
                self.excel_categories[error_text] = category
            
            self.logger.info(f"Loaded {len(self.excel_categories)} error categories from Excel")
            
        except Exception as e:
            self.logger.error(f"Error loading Excel categories: {str(e)}")
            raise
    
    def categorize_messages_for_index(self, df: pd.DataFrame, index: int) -> str:
        """
        Categorize all messages for a specific Index
        
        Args:
            df (pd.DataFrame): Input DataFrame
            index (int): Index value to categorize
            
        Returns:
            str: Error category for the Index
        """
        try:
            index_messages = df[df['Index'] == index]['Message text'].tolist()
            
            if not index_messages:
                self.logger.warning(f"No messages found for Index {index}")
                return DEFAULT_ERROR_CATEGORY
            
            for message in index_messages:
                category = self._categorize_single_message(str(message))
                if category != DEFAULT_ERROR_CATEGORY:
                    self.logger.debug(f"Categorized Index {index} as: {category}")
                    return category
            
            self.logger.debug(f"No category found for Index {index}, using default")
            return DEFAULT_ERROR_CATEGORY
            
        except Exception as e:
            self.logger.error(f"Error categorizing messages for Index {index}: {str(e)}")
            return DEFAULT_ERROR_CATEGORY
    
    def _categorize_single_message(self, message: str) -> str:
        """
        Categorize a single message using Excel categories and custom functions
        
        Args:
            message (str): Message text to categorize
            
        Returns:
            str: Error category or default category if no match found
        """
        message_lower = message.lower().strip()
        
        for error_text, category in self.excel_categories.items():
            if error_text in message_lower:
                return category
        
        for custom_func in self.custom_functions:
            category = custom_func(message)
            if category:
                return category
        
        return DEFAULT_ERROR_CATEGORY
    
    def _setup_custom_functions(self) -> None:
        """Set up custom categorization functions for complex patterns"""
        self.custom_functions = [
            self._categorize_timeout_errors,
            self._categorize_connection_errors,
            self._categorize_validation_errors,
            self._categorize_permission_errors
        ]
        
        self.logger.info(f"Set up {len(self.custom_functions)} custom categorization functions")
    
    def _categorize_timeout_errors(self, message: str) -> str:
        """
        Categorize timeout-related errors
        
        Args:
            message (str): Message text
            
        Returns:
            str: Category name or empty string if no match
        """
        timeout_patterns = [
            r'timeout',
            r'timed out',
            r'connection timeout',
            r'request timeout'
        ]
        
        for pattern in timeout_patterns:
            if re.search(pattern, message, re.IGNORECASE):
                return "Timeout Error"
        
        return ""
    
    def _categorize_connection_errors(self, message: str) -> str:
        """
        Categorize connection-related errors
        
        Args:
            message (str): Message text
            
        Returns:
            str: Category name or empty string if no match
        """
        connection_patterns = [
            r'connection refused',
            r'connection failed',
            r'network error',
            r'unable to connect',
            r'connection lost'
        ]
        
        for pattern in connection_patterns:
            if re.search(pattern, message, re.IGNORECASE):
                return "Connection Error"
        
        return ""
    
    def _categorize_validation_errors(self, message: str) -> str:
        """
        Categorize validation-related errors
        
        Args:
            message (str): Message text
            
        Returns:
            str: Category name or empty string if no match
        """
        validation_patterns = [
            r'validation failed',
            r'invalid.*format',
            r'invalid.*data',
            r'schema.*error',
            r'validation.*error'
        ]
        
        for pattern in validation_patterns:
            if re.search(pattern, message, re.IGNORECASE):
                return "Validation Error"
        
        return ""
    
    def _categorize_permission_errors(self, message: str) -> str:
        """
        Categorize permission-related errors
        
        Args:
            message (str): Message text
            
        Returns:
            str: Category name or empty string if no match
        """
        permission_patterns = [
            r'access denied',
            r'permission denied',
            r'unauthorized',
            r'forbidden',
            r'authentication.*failed'
        ]
        
        for pattern in permission_patterns:
            if re.search(pattern, message, re.IGNORECASE):
                return "Permission Error"
        
        return ""
    
    def add_custom_function(self, func) -> None:
        """
        Add a custom categorization function
        
        Args:
            func: Function that takes message text and returns category or empty string
        """
        self.custom_functions.append(func)
        self.logger.info("Added custom categorization function")
