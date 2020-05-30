this is the read me for a project to make an auto filling dictionary of linked words in roam

...
...


design outline for roam word glossary

try to (things that appear possible from chrome extension docs)
detect if url is roam [done]
detect keystrokes from user [done]

if i can do those.

add any word with [[]] around it to a dictionary(type thing) [working on / different approach maybe necessary]
search the dictionary of words for all future words (every keystroke? every space so it only fires at the end of the word?)

if it matches, inject the [[]] around the word (not sure if possible, but i think so)


.
.
.

logic to check a string (multi word)

upon hitting space
loop backwards through chars in string from end to cover longest stored string
store location of every space character along the way
at the end of the loop, check if last(leftmost) character is a space, as it should be if the string matches
if yes, check if string matches
if no to either, move right to next space and check if there is a matching string from there to the end, repeat til last space

if a string match occurs, link it and stop checking

WRONG, THIS WILL ONLY WORK WITH LINEAR TYPING. NEED TO CHECK WHOLE DOC BECAUSE WORDS CAN BE ADDED TO MIDDLE OR CHECK IF CHARACTER INSERT LOCATION CAN BE FOUND

TO DO!
-CLEAN UP COMMENTED CODE, ADD ACTUAL COMMENTS
-make search fire on any letter keystroke (possibly excluding + and -) rather than just space
-make it so lines starting with + or - cannot trigger auto-link-recognition
-make search of dictionary non-case-sensitive
-make shortcut for clearing dictionary when listed out (possibly typing -- at the end of the string)
-get autofill working for saved words and phrases, detect partial strings in dictionary (includes method?) and interface with roams autofill somehow
