// NitterRedirect.js

// Listen for the webRequest.onBeforeRequest event
browser.webRequest.onBeforeRequest.addListener(
  function (details) {
    // Modify the URL to redirect from twitter.com to nitter.it
    var redirectUrl = details.url.replace("twitter.com", "nitter.it");

    // Return the redirect response
    return { redirectUrl: redirectUrl };
  },
  { urls: ["*://*.twitter.com/*"] },
  ["blocking"]
);
