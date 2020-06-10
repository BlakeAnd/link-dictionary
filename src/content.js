  window.addEventListener('load', function () {
    console.log("It's loaded!")
  
    let a_class = document.getElementsByClassName("rm-title-display");
    console.log("class log", a_class);
    
    let nodes = a_class;
    console.log("span log", nodes);

     var longest_link = get_link_at_start();
    
    document.onkeypress = function() {
      console.log("test");
      console.log(event.keyCode, event.Charcode);


      if (event.keyCode == 43){
        handle_plus();
      }
      else if (event.keyCode == 45){
        handle_minus();  
      }
      else {
        console.log("event.key: ", event.key)
        handle_other();
      }
    };

    function show_dictionary(){
      console.log("SHOW");
      let dict_display = "";
      chrome.storage.local.get(["dictionary"], function(result) {
        let dictionary = result.dictionary;
        console.log("dot dict", dictionary);
        for(var key in dictionary) {
          if(dictionary[key] === "active"){
            dict_display = dict_display + key + ", ";
          }
        }
        dict_display = dict_display.slice(0, dict_display.length-2);
        dict_display = "links: " + dict_display + ".";
        document.activeElement.value = dict_display;
      }); 

      // chrome.storage.local.clear(function() {
      //   var error = chrome.runtime.lastError;
      //   if (error) {
      //       console.error(error);
      //   }
      // });
    }

    function handle_other(){
      // console.log("link length", longest_link);
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
      if(str[0] != "+" && str[0] != "-"){
        dictionary_exists("check for link");
      }
    }

    function handle_plus () {
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
      if(str === "+"){
        event.preventDefault();
        dictionary_exists("show dictionary");
      } 
      else if(str[0] === "+" && inner_str.length > 0){
        event.preventDefault(); 
        dictionary_exists("add word");
      }
    }

    function handle_minus () {
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
      if(str[0] === "-" && inner_str.length > 0){
        event.preventDefault(); 
        dictionary_exists("remove word");
      } 
      else {
        dictionary_exists("hide dictionary")
      }
    }

    function dictionary_exists (action) {
      let it_exists = false;
      chrome.storage.local.get(["dictionary"], function(result) {
        console.log("dictionary call returns:", result);
        for(var key in result) {
          console.log("key: ", key);
          console.log("hasprop", result.hasOwnProperty(key));
          if(result.hasOwnProperty(key)){
            it_exists = true;
          }
        }
        if(it_exists === true){
          if(action === "show dictionary"){
            show_dictionary();
          }
          else if (action === "add word"){
            add_word();
          }
          else if (action === "remove word"){
            remove_word();
          }
          else if(action === "check for link"){
            check_link();
          }
          else if(action === "hide dictionary"){
            console.log("action hide")
            hide_dictionary();
          }
        } 
        else {
          if(action === "add word"){
            add_first_word();
          }
        }
      });

    }

    // function add_link (){
    //   document.activeElement.value = check_link();
    // }
    function hide_dictionary (){
      console.log("HIDE")
      let str = document.activeElement.value;
      let dict_display = "";
      chrome.storage.local.get(["dictionary"], function(result) {
        let dictionary = result.dictionary;
        console.log("dot dict", dictionary);
        for(var key in dictionary) {
          if(dictionary[key] === "active"){
            dict_display = dict_display + key + ", ";
          }
        }
        dict_display = dict_display.slice(0, dict_display.length-2);
        console.log(dict_display, str)
        if(str = dict_display){
          document.activeElement.value = "";
        }
      });
    }

    function check_link() {
      let str = document.activeElement.value;
      let display_str = document.activeElement.value;
      let check_str = "";
      let min = 0;
      let max = str.length;
      // chrome.storage.local.get(["longest_link"], function(result) {
      //   if(typeof(result.longest_link) === "number"){
      //     longest_link = result.longest_link;
      //   }
      
      let cursor_index = get_cursor_position();
      if(cursor_index-longest_link > 0){
        min = cursor_index-longest_link-1;
      }
      if(cursor_index+longest_link < str.length){
        max = cursor_index+longest_link;
      }

      chrome.storage.local.get(["dictionary"], function(result) {
        let dictionary = result.dictionary;
        console.log("dot dict", dictionary);

        for(let i = min; i < cursor_index-1; i++){
          check_str = str.slice(i, cursor_index-1);
          console.log("check str", check_str, dictionary, dictionary["beep"], dictionary[check_str]);
          if(dictionary[check_str] === "active" && (min === 0 || str[i-1] === " ")){
           str = str.slice(0, i) + "[[" + check_str + "]] " + str.slice(cursor_index);
           console.log("linked str", str);
           document.activeElement.value = str;
           document.activeElement.selectionEnd = cursor_index + 4;
           break;
          }
        }
        for(let i = max; i > cursor_index; i--){
          
        }
        // if(detected === false){
        //   display_str = display_str + str.slice(last_str_starts);
        //   console.log("final", display_str);
        // }
        // document.activeElement.value = display_str;
        // dict_display = dict_display.slice(0, dict_display.length-2);
        // console.log("dis", dict_display);
        // document.activeElement.value = dict_display;
      });
    // });
    }

    function get_link_at_start () {
      chrome.storage.local.get(["longest_link"], function(result) {
        if(typeof(result.longest_link) === "number"){
          return result.longest_link;
        }
        else{
          return 0;
        }
      });
    }

    function add_first_word (){
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
      let dictionary = {};
      longest_link = inner_str.length;
      dictionary[inner_str] = "active"
      chrome.storage.local.set({"dictionary": dictionary}, function() {});
      chrome.storage.local.set({"longest_link": longest_link}, function() {});
    }
    
    function add_word(){
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
        chrome.storage.local.get(["dictionary"], function(result) {
          let dictionary = result.dictionary;
          if(dictionary[inner_str] != "active"){
            dictionary[inner_str] = "active";
          }
          chrome.storage.local.set({"dictionary": dictionary}, function() {});
        });
        chrome.storage.local.get(["longest_link"], function(result) {
          if(inner_str.length > result.longest_link){
            longest_link = inner_str.length;
            chrome.storage.local.set({"longest_link": longest_link}, function() {});
          }  
          console.log("longo", inner_str.length, result);
        });

      document.activeElement.value = "";
    }

    function remove_word(){
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
      chrome.storage.local.get(["dictionary"], function(result) {
        let dictionary = result.dictionary;
        if(dictionary[inner_str] === "active"){
          dictionary[inner_str] = "inactive";
        }
        chrome.storage.local.set({"dictionary": dictionary}, function() {});
      });
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


