  window.addEventListener('load', function () {
    console.log("It's loaded!")
  
    let a_class = document.getElementsByClassName("rm-title-display");
    console.log("class log", a_class);
    
    let nodes = a_class;
    console.log("span log", nodes);

    
    document.onkeypress = function() {
      console.log("test");
      console.log(event.keyCode, event.Charcode);

      let dictionary = {
        "key concepts": "active",
        "dreams": "active",
        "to read": "active"
      }
    
      // if(document.getElementsByClassName("shoutbox").length > 0){
      //   alert('Chat is available.')
      // }
      if (event.keyCode == 32){
        console.log(event.keyCode, String.fromCharCode(event.keyCode)); 
        // event.preventDefault();
        //console.log(document.activeElement.innerHTML);
        let str = document.activeElement.innerHTML;
        // console.log(str[str.length-1]);
        let space_found = false;
        let word_string = "";
        for(i = str.length-1; i > 0; i--){
          word_string = word_string + str;
          console.log(str[i]);
          if(str[i] === " " && space_found === false){
            space_found = true;
            // console.log("string to end:", str.slice(i+1));
            str = str.slice(0, i+1) + "[[" + str.slice(i+1) + "]]"
            break;
          } else if (i === 1){
            str = "[[" + str + "]]"
          }
        }
        console.log("WORD", word_string);
        // str = str + "]]";
        // console.log(str)
        // // document.getElementById("block-input-PpsjPhmnnjdkWYiBg2nnDTjHHOA2-body-outline-05-08-2020-k5YKEc8J1").innerHTML = "hey!";
        document.activeElement.value = str;
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


