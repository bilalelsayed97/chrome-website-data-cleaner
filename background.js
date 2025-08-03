chrome.action.onClicked.addListener((tab) => {
          // Get the current tab's URL
          const url = new URL(tab.url);
          const domain = url.hostname;

          // Clear all browsing data for the current domain
          chrome.browsingData.remove({
                    "origins": [url.origin]
          }, {
                    "cacheStorage": true,
                    "cookies": true,
                    "fileSystems": true,
                    "indexedDB": true,
                    "localStorage": true,
                    "serviceWorkers": true,
                    "webSQL": true
          }, () => {
                    // Check for errors
                    if (chrome.runtime.lastError) {
                              console.error('Error clearing site data:', chrome.runtime.lastError);
                              return;
                    }

                    // Explicitly reload the tab after clearing data
                    chrome.tabs.reload(tab.id, { bypassCache: true }, () => {
                              if (chrome.runtime.lastError) {
                                        console.error('Error reloading tab:', chrome.runtime.lastError);
                              } else {
                                        console.log('Site data cleared and page refreshed for:', url.origin);
                              }
                    });
          });
});
