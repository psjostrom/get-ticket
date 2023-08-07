function getTicket() {
  navigator.clipboard.writeText(
    document.getElementById("key-val").textContent +
      "-" +
      document
        .getElementById("summary-val")
        .textContent.replaceAll(/([^a-zA-Z0-9\-\s])/g, "")
        .replaceAll(/\s\s+/g, " ")
        .replaceAll(" ", "-")
        .toLowerCase()
  );
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    func: getTicket,
  });
});
