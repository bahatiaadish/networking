"""
Logging configuration for the Excel processing system
"""
import logging
import os
from config import LOG_FILE

def setup_logger():
    """
    Set up logging configuration to write to Logger.log file
    
    Returns:
        logging.Logger: Configured logger instance
    """
    if os.path.exists(LOG_FILE):
        os.remove(LOG_FILE)
    
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(LOG_FILE, mode='w'),
            logging.StreamHandler()
        ]
    )
    
    logger = logging.getLogger(__name__)
    logger.info("Excel processing system started")
    return logger

def get_logger():
    """
    Get the configured logger instance
    
    Returns:
        logging.Logger: Logger instance
    """
    return logging.getLogger(__name__)
