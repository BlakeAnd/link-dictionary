document.onkeydown = function() {
  console.log("test");
  if (event.keyCode === 113){
    console.log("queue")
  }
};

// chrome.storage.local.set({ isPaused: false })
// chrome.storage.local.set({'user_name': json.user_name})
