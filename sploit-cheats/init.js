chrome.webRequest.onBeforeRequest.addListener(function(details) {
	return {redirectUrl:chrome.extension.getURL("game.js")};
}, { urls: ["https://krunker.io/js/game.js"] }, ["blocking"]);
