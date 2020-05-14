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

      // chrome.storage.local.set({"dreams": "active"}, function() {
      //   // console.log('Value is set to ' + );
      // });
    

      //   chrome.storage.local.get([string], function(result) {
      //     return result[string]
      //   });

      let listen = -1;
      // if(document.getElementsByClassName("shoutbox").length > 0){
      //   alert('Chat is available.')
      // }
      if (event.keyCode == listen){
        listen = -1;
        //other logic
      }
      else if (event.keyCode == 32){
          //space event, check previous char to make decision
          //if previous char is +, loop back to previous space and link word (same function as multi word should work
          // get_cursor_position();



        // console.log(event.keyCode, String.fromCharCode(event.keyCode)); 
        // // event.preventDefault();
        // //console.log(document.activeElement.innerHTML);
        // let str = document.activeElement.innerHTML;
        // // console.log(str[str.length-1]);
        // let space_found = false;
        // let word_string = "";
        // for(i = str.length-1; i > 0; i--){
        //   word_string = word_string + str;
        //   console.log(str[i]);
        //   if(str[i] === " " && space_found === false){
        //     space_found = true;
        //     // console.log("string to end:", str.slice(i+1));
        //     str = str.slice(0, i+1) + "[[" + str.slice(i+1) + "]]"
        //     break;
        //   } else if (i === 1){
        //     str = "[[" + str + "]]"
        //   }
        // }
        // console.log("WORD", word_string);
        // // str = str + "]]";
        // // console.log(str)
        // // // document.getElementById("block-input-PpsjPhmnnjdkWYiBg2nnDTjHHOA2-body-outline-05-08-2020-k5YKEc8J1").innerHTML = "hey!";

        // document.activeElement.value = str;
      }
      else if (event.keyCode == 43){
        handle_plus(dictionary);
      }
      else if (event.keyCode == 45){
        remove_word(dictionary);  
      }
      console.log("dict outside func", dictionary)
    };

    function show_dictionary(dictionary){
      console.log("dict in show func", dictionary)
      let dict_display = "ok"
      // for(let word in dictionary){
      //   console.log(word)
      //   dict_display = dict_display + word + ", ";
      // }
      for (var i = 0; i < localStorage.length; i++){
        // console.log(localStorage.getItem(chrome.localStorage.key(i)));
        chrome.storage.local.get(['cloud'], function(result) {
          dict_display = result;
        });
      }
      // dict_display = dict_display.slice(0, dict_display.length-2);
      console.log("dict display: ", dict_display);
      document.activeElement.value = dict_display;
    }

    function handle_plus (dictionary) {
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
      console.log("in idct", dictionary[inner_str]);
      console.log("len", inner_str.length);
      // if (inner_str.length === 0 && str[0] === "+" && char_position === 1){
      if(str === "+"){
        event.preventDefault();
      // console.log("len again", inner_str.length);
        show_dictionary(dictionary);
      } else if(str[0] === "+" && dictionary[inner_str] != "active"){
        event.preventDefault(); 
        add_word(dictionary, inner_str);
      }
    }

    function add_word(dictionary, inner_str){
      // console.log("dict before", dictionary);
      // dictionary[inner_str] = "active";
      // console.log("dict after", dictionary);
      chrome.storage.local.set({inner_str: "active"}, function() {});
      
      document.activeElement.value = "";
    }

    function remove_word(dictionary){
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
      console.log("in idct", dictionary[inner_str]);
      if(str[0] === "-" && dictionary[inner_str] === "active"){
        dictionary[inner_str] = "inactive";
      }
      document.activeElement.value = "";
    }

    function get_cursor_position(){
      let cursor_position = null;
      if(document.activeElement.selectionStart === document.activeElement.selectionEnd){
        cursor_position = document.activeElement.selectionStart;
      }
      // console.log("cursor", document.activeElement.value.length);
      // console.log("cursor", document.activeElement.selectionStart);
      // console.log("cursor", document.activeElement.selectionEnd);
      return cursor_position;
    };
    
    // document.addEventListener('DOMSubtreeModified', function(e) {
    //     if(document.getElementsByClassName("shoutbox").length > 0){
    //         alert('Chat is available.')
    //     }
    // });
    
    // chrome.storage.local.set({ isPaused: false })
    // chrome.storage.local.set({'user_name': json.user_name})  
  
})


