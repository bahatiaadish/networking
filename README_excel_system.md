# Excel Error Categorization System

A modular Python system for processing Excel files with error categorization. This system reads error logs from an input Excel file, categorizes errors using both Excel-based categories and custom functions, then generates an organized output file with unique message IDs and categorizations.

## Features

- **Modular Design**: Clean separation of concerns with dedicated modules for each functionality
- **Comprehensive Logging**: Detailed logging to `Logger.log` file with timestamps and error tracking
- **Error Handling**: Robust error handling throughout the system with graceful degradation
- **Extensible Categorization**: Support for both Excel-based categories and custom categorization functions
- **Message ID Extraction**: Automatic extraction of unique message IDs from processing started messages

## File Structure

```
├── excel_processor.py      # Main orchestrator and entry point
├── file_handler.py         # Excel file reading/writing operations
├── error_categorizer.py    # Error categorization logic
├── message_extractor.py    # Unique message ID extraction
├── logger_config.py        # Logging configuration
├── config.py              # Configuration constants
├── Input.xlsx             # Input file with error logs
├── ErrorCategories.xlsx   # Error categories definition
├── Output.xlsx            # Generated output file
└── Logger.log             # System log file
```

## Input File Format

**Input.xlsx** (Sheet1) should contain:
- `Index`: Repeating values for related messages
- `Sequence`: Unique sequence numbers for processing order
- `Message text`: Actual error messages
- `Date`: Date when error occurred
- `Time`: Time when error occurred

## Error Categories File Format

**ErrorCategories.xlsx** (Sheet1) should contain:
- `ErrorText`: Text patterns to match in messages
- `Error Category`: Category name for matched patterns
- `Priority`: Priority level for categorization

## Output File Format

**Output.xlsx** contains:
- `Serial Number`: Sequential numbering
- `Message ID`: Unique alphanumeric identifier extracted from processing started messages
- `Error Category`: Assigned error category
- `Date`: Date from the processing started message
- `Time`: Time from the processing started message

## Usage

### Basic Usage

```bash
python excel_processor.py
```

### Requirements

```bash
pip install pandas openpyxl
```

## How It Works

1. **File Loading**: Reads Input.xlsx and ErrorCategories.xlsx files
2. **Message Extraction**: For each unique Index, finds the entry with the highest Sequence number and extracts the unique message ID from "Message [ID] processing started" format
3. **Error Categorization**: Categorizes all messages for each Index using:
   - Excel-based categories (exact text matching)
   - Custom functions for complex patterns (timeout, connection, validation, permission errors)
4. **Output Generation**: Creates Output.xlsx with one row per unique Index containing the extracted message ID and categorization

## Custom Error Categories

The system includes built-in custom categorization functions for:

- **Timeout Errors**: Messages containing timeout-related keywords
- **Connection Errors**: Network and connection-related issues
- **Validation Errors**: Data validation and format issues
- **Permission Errors**: Access and authentication problems

### Adding New Custom Categories

To add new custom categorization functions:

```python
def my_custom_categorizer(message: str) -> str:
    if "my_pattern" in message.lower():
        return "My Custom Category"
    return ""

# Add to the categorizer
categorizer = ErrorCategorizer()
categorizer.add_custom_function(my_custom_categorizer)
```

## Error Handling

- Missing or malformed files are handled gracefully with detailed error messages
- If a message cannot be categorized, it receives the default category: "Could not be put in any category, need manual intervention"
- All errors are logged to `Logger.log` with timestamps and context

## Logging

The system generates comprehensive logs in `Logger.log` including:
- Processing start/completion times
- File loading status
- Message extraction results
- Categorization decisions
- Error details and warnings

## Configuration

All configuration constants are centralized in `config.py`:
- File names and paths
- Required column names
- Default error categories
- Regular expression patterns

## Troubleshooting

1. **File Not Found**: Ensure Input.xlsx and ErrorCategories.xlsx are in the same directory as the script
2. **Missing Columns**: Check that input files have all required columns as specified in config.py
3. **Processing Errors**: Check Logger.log for detailed error information
4. **No Message IDs Found**: Verify that input file contains messages in "Message [ID] processing started" format

## Future Enhancements

- Database integration for large datasets
- Web interface for file upload and processing
- Advanced pattern matching with machine learning
- Real-time processing capabilities
- Export to multiple formats (CSV, JSON, etc.)
