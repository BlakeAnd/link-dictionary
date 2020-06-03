this is the read me for a project to make a dictionary of auto-linking words in roam
-------------------------------------------------------------
### USER INSTRUCTIONS
this currently a basic version of an automatic linking tool for roam

any time you type a word that is in your dictionary of saved words it will automatically make it a link

this is currently triggered by the SPACE BUTTON, notably this means that for now you will have to hit space before you hit enter to link words at the end of a line

so if we have "dog" saved as a link "my dog is the best" will become "my [[dog]] is the best"

#### TO ADD A WORD
start a new line in roam

type your word on the new line wrapped in + signs
like so

+word or phrase+

#### TO REMOVE A WORD

same as above but with - signs, like so

-word or phrase-

#### TO SEE WHAT WORDS YOU HAVE SET TO AUTOLINK
go to a new line in roam and type ++

------------------------------------------------------------------

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



TO DO!
-CLEAN UP COMMENTED CODE, ADD ACTUAL COMMENTS

-make search fire on any letter keystroke (possibly excluding + and -) rather than just space

-make it so lines starting with + or - cannot trigger auto-link-recognition

-make search of dictionary non-case-sensitive

-make shortcut for clearing dictionary when listed out (possibly typing -- at the end of the string)

-get autofill working for saved words and phrases, detect partial strings in dictionary (includes method?) and interface with roams autofill somehow
