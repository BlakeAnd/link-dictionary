let a_class = document.getElementsByClassName("rm-title-display");
console.log("class log", a_class);

let nodes = a_class.childNodes;
console.log("span log", a_span);

document.onkeypress = function() {
  console.log("test");
  // console.log(event.keyCode);


  // if(document.getElementsByClassName("shoutbox").length > 0){
  //   alert('Chat is available.')
  // }
  if (event.keyCode == 97){
    console.log(event.keyCode, String.fromCharCode(event.keyCode)); 
    // event.preventDefault();
    console.log("the id", event.id);
  }
};

// document.addEventListener('DOMSubtreeModified', function(e) {
//     if(document.getElementsByClassName("shoutbox").length > 0){
//         alert('Chat is available.')
//     }
// });

// chrome.storage.local.set({ isPaused: false })
// chrome.storage.local.set({'user_name': json.user_name})
