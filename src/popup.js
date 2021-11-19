var url = window.location.href;
document.getElementById("").innerHTML = url;

chrome.webRequest.onBeforeSendHeaders.addListener(listenForWebrequest, {
	urls: ["<all_urls>"] 
	},["blocking", "requestHeaders"]);
