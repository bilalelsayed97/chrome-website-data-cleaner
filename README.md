# Clear Site Data Chrome Extension

## Overview

**Clear Site Data** is a lightweight and efficient Chrome extension designed to help users quickly clear all site-specific data (including cookies, cache, local storage, and more) for the current website with a single click. After clearing the data, the extension automatically reloads the page to ensure a fresh browsing experience. This tool is ideal for developers, testers, and privacy-conscious users who need to reset site data during testing or for troubleshooting purposes.

## Features

- **One-Click Data Clearing**: Clears all site-specific data (cookies, cache, local storage, IndexedDB, service workers, etc.) for the current website.
- **Automatic Page Reload**: Refreshes the page after clearing data, ensuring a clean state without manual intervention.
- **Broad Compatibility**: Works on any website (`<all_urls>` host permission) with proper error handling.
- **Minimalist Design**: Simple and intuitive interface with no unnecessary UI elements.
- **Privacy-Focused**: Only clears data for the active tab's domain, ensuring targeted data removal.

## Installation

1. **Download or Clone the Repository**:
   - Clone this repository or download the source code as a ZIP file.
   - `git clone https://github.com/your-repo/clear-site-data.git`

2. **Load the Extension in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable **Developer mode** (toggle in the top-right corner).
   - Click **Load unpacked** and select the folder containing the extension files.

3. **Verify Installation**:
   - The "Clear Site Data" icon should appear in the Chrome toolbar.
   - Pin the extension for easy access if desired.

## Usage

1. **Navigate to a Website**:
   - Open the website for which you want to clear data.

2. **Click the Extension Icon**:
   - Click the "Clear Site Data" icon in the Chrome toolbar.
   - The extension will clear all site data (cookies, cache, local storage, etc.) for the current domain and reload the page automatically.

3. **Check the Console (Optional)**:
   - Open the Chrome Developer Tools (`F12` or `Ctrl+Shift+I`) and navigate to the Console tab to view logs confirming data clearing and page reload.

## Permissions

The extension requires the following permissions to function:

- **`activeTab`**: Access the current tab to retrieve its URL and perform actions.
- **`cookies`**: Clear cookies for the current website.
- **`storage`**: Access and clear local storage and session storage.
- **`browsingData`**: Remove site-specific data, including cache, IndexedDB, service workers, and more.
- **`<all_urls>`**: Allows the extension to work on any website.

These permissions are used responsibly to ensure the extension only interacts with the active tab's domain.

## File Structure

```
clear-site-data/
├── manifest.json        # Extension configuration
├── background.js       # Service worker script for clearing data and reloading the page
├── icon16.png          # 16x16 icon for the extension
├── icon48.png          # 48x48 icon for the extension
├── icon128.png         # 128x128 icon for the extension
└── README.md           # This file
```

## Development

### Prerequisites

- Google Chrome (or any Chromium-based browser).
- Basic knowledge of Chrome extension development (optional for advanced customization).

### Building from Source

1. Modify the `manifest.json` or `background.js` files as needed.
2. Ensure the icon files (`icon16.png`, `icon48.png`, `icon128.png`) are present in the root directory.
3. Load the updated extension in Chrome using the **Load unpacked** option.

### Testing

- Test the extension on various websites to ensure data is cleared and the page reloads correctly.
- Check the Chrome Developer Tools Console for logs or errors.
- Verify that only the active tab's domain data is affected.

## Limitations

- The extension clears data only for the active tab's domain (`url.origin`) and does not affect other domains.
- Some websites may require additional user interaction after clearing data (e.g., re-authentication).
- Errors during data clearing or page reloading are logged to the console for debugging.

## Troubleshooting

- **Extension Icon Not Visible**:
  - Ensure the extension is loaded and pinned in the Chrome toolbar.
  - Verify that the icon files are present in the correct paths.

- **Data Not Cleared**:
  - Check the Console for errors (`chrome.runtime.lastError`).
  - Ensure the website is using standard web storage mechanisms supported by `chrome.browsingData`.

- **Page Not Reloading**:
  - Confirm that the `tabs.reload` permission is working and there are no network issues.
  - Check for errors in the Console.


## Acknowledgments

- Built using the [Chrome Extensions API](https://developer.chrome.com/docs/extensions/).


**Clear Site Data** - Simplify your browsing and-finding and reset websites with ease!
