  window.addEventListener('load', function () {
    console.log("It's loaded!")
  
    let a_class = document.getElementsByClassName("rm-title-display");
    console.log("class log", a_class);
    
    let nodes = a_class;
    console.log("span log", nodes);

    
    document.onkeypress = function() {
      console.log("test");
      console.log(event.keyCode, event.Charcode);

      // let dictionary = {
      //   "key concepts": "active",
      //   "dreams": "active",
      //   "to read": "active"
      // }

      // chrome.storage.local.set({"dreams": "active"}, function() {
      //   // console.log('Value is set to ' + );
      // });
    

      //   chrome.storage.local.get([string], function(result) {
      //     return result[string]
      //   });

      if (event.keyCode == 32){
        handle_other();
      }
      else if (event.keyCode == 43){
        handle_plus();
      }
      else if (event.keyCode == 45){
        handle_minus();  
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
        console.log("dis", dict_display);
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
        } 
        else {
          if(action === "add word"){
            add_first_word();
          }
        }
      });

    }

    function check_link() {
      let str = document.activeElement.value;
      let display_str = document.activeElement.value;
      chrome.storage.local.get(["dictionary"], function(result) {
        let dictionary = result.dictionary;
        console.log("dot dict", dictionary);
        let detected = true;
        let count = 0;
        let word_indices = [];
        let index_adjuster = 0;
        for(var key in dictionary) { 
          detected = true;
          while(detected === true && count < 100){
            detected = false;
            count ++;
            if(str.includes(`${key}`) === true && str.includes(`[[${key}]]`) === false){
              index_adjuster = index_adjuster + str.indexOf(key);
              word_indices.push(str.indexOf(key));
              detected = true;
              str = str.slice(str.indexOf(key) + key.length);
              console.log("new str", str)
            }
          }
            // detected = true;
            // last_str_starts = str.indexOf(key) + key.length;
            // str = str.slice(0, str.indexOf(key)) + "[[" + key + "]]" + str.slice(last_str_starts);
            // console.log(display_str);
            // str = str.slice(last_str_starts);
            // console.log("LEN", str.length);

          // else if (str.includes(`[[${key}]]`) === true){  
          //   detected = true;
          //   str = str.slice(last_str_starts);
          // }
          // console.log(str.includes(key) === true && str.includes(`[[${key}]]`));
        }
        console.log("word starts", word_indices);
        // if(detected === false){
        //   display_str = display_str + str.slice(last_str_starts);
        //   console.log("final", display_str);
        // }
        document.activeElement.value = str;
        // dict_display = dict_display.slice(0, dict_display.length-2);
        // console.log("dis", dict_display);
        // document.activeElement.value = dict_display;
      });
    }

    function add_first_word (){
      let str = document.activeElement.value;
      let inner_str = str.slice(1);
      let dictionary = {};
      dictionary[inner_str] = "active"
      chrome.storage.local.set({"dictionary": dictionary}, function() {});
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


