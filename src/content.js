  window.addEventListener('load', function () {
    console.log("It's loaded!")
  
    let a_class = document.getElementsByClassName("rm-title-display");
    console.log("class log", a_class);
    
    let nodes = a_class;
    console.log("span log", nodes);
    
    document.onkeypress = function() {
      console.log("test");
      // console.log(event.keyCode);
    
    
      // if(document.getElementsByClassName("shoutbox").length > 0){
      //   alert('Chat is available.')
      // }
      if (event.keyCode == 97){
        console.log(event.keyCode, String.fromCharCode(event.keyCode)); 
        // event.preventDefault();
        console.log(document.activeElement.id);
      }
    };
    
    // document.addEventListener('DOMSubtreeModified', function(e) {
    //     if(document.getElementsByClassName("shoutbox").length > 0){
    //         alert('Chat is available.')
    //     }
    // });
    
    // chrome.storage.local.set({ isPaused: false })
    // chrome.storage.local.set({'user_name': json.user_name})  
  
})


