"""
Configuration constants for the Excel processing system
"""

INPUT_FILE = "Input.xlsx"
ERROR_CATEGORIES_FILE = "ErrorCategories.xlsx"
OUTPUT_FILE = "Output.xlsx"
LOG_FILE = "Logger.log"

INPUT_SHEET_NAME = "Sheet1"
ERROR_CATEGORIES_SHEET_NAME = "Sheet1"

REQUIRED_INPUT_COLUMNS = ["Index", "Sequence", "Message text", "Date", "Time"]
REQUIRED_ERROR_CATEGORIES_COLUMNS = ["ErrorText", "Error Category", "Priority"]

OUTPUT_COLUMNS = ["Serial Number", "Message ID", "Error Category", "Date", "Time"]

DEFAULT_ERROR_CATEGORY = "Could not be put in any category, need manual intervention"

PROCESSING_STARTED_PATTERN = r"Message\s+([A-F0-9]+)\s+processing\s+started"
