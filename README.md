this is the read me for a project to make a dictionary of auto-linking words in roam
----------------------------------------------------------------
### USER INSTRUCTIONS
* this currently a basic version of an automatic linking tool for roam

* any time you type a word that is in your dictionary of saved words it will automatically make it a link

* this is currently triggered by the SPACE BUTTON, notably this means that for now you will have to hit space before you hit enter to link words at the end of a line

* so if we have "dog" saved as am autolink "my dog is the best" will become "my [[dog]] is the best"

#### TO ADD A WORD
* start a new line in roam

* type your word on the new line wrapped in + signs like so

+word or phrase+

#### TO REMOVE A WORD

* same as above but with - signs, like so

-word or phrase-

#### TO SEE WHAT WORDS YOU HAVE SET TO AUTOLINK
* go to a new line in roam and type two plus signs, like so
++
* this will display all the links you currently have, like so
links: word, example phrase.
#### TO CLEAR THE PRINTED WORDS
* if you have hit ++ and displayed your currently linked word you can type dash at the end of the line to clear it, like so
links: word, example phrase.-


------------------------------------------------------------------

### TO DO/IDEAS
[ ] CLEAN UP COMMENTED CODE, ADD ACTUAL COMMENTS

[+] make search fire on any letter keystroke (possibly excluding + and -) rather than just space [DONE]

[ ] make it so lines starting with + or - cannot trigger auto-link-recognition (maybe do't do this, adding links containing smaller links will cause other more difficult problems)

[ ] make search of dictionary non-case-sensitive

[x] make shortcut for clearing dictionary when listed out (possibly typing -- at the end of the string) [DONE]

[ ] get autofill working for saved words and phrases, detect partial strings in dictionary (includes method?) and maybe interface with roams autofill somehow..

[ ] build checkbox/form style GUI to manage words

[ ] make syntax to add or remove words that doesn not require going to a new line (possibly something like [[word+]]) (this would also give the user access to roams autcomplete when adding a new link!!)

[ ] add shortcut for displaying instructions (/autolink-i, or something)

[ ] ability to add multiple new links at once, comma separated (for example +ok, yes, word, and phrase+)

[ ] stop the words "link: ." from displaying when there are no linked words to display

[ ] restructure dicitonary to set a local variable based on chrome storage so that chrome storage is not being called for every keystroke which could cause latency problems

.
-------------------------------------------------------------------
old notes 

detect if url is roam [done]

[x] detect keystrokes from user [done]

if i can do those.

add any word with [[]] around it to a dictionary(type thing) [working on / different approach maybe necessary]
search the dictionary of words for all future words (every keystroke? every space so it only fires at the end of the word?)

if it matches, inject the [[]] around the word (not sure if possible, but i think so) [DONE]


