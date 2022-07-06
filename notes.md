# Notes and Ideas
## 7/5
Need to clean up the code now.  I think there's a number of loose ends that connect to nothing. 
Shorten functions.  The thing works, but code is messy.

there's two knoblist event listener functions just floating there.  can I combine into 1?  Do I have to wrap them as a function?

event listeners... can they be wrapped in a function?  Should they?  How do they get called / activated?





## 6/29

Need to Fix :
red frame size and workspace size.  the workspace isn't really attached to the red square... 
workspace.clientWidth is set when the app is opened. Keeps the same value even if the window is resized. This causes some of the resizing issues.


the pixels are no longer square.   1.5 ratio difference?  No. maybe.    how to get them square again?


the knobs!   use offsetX to find the x value of cursor   use a percentage to 
x = 0 then rotation  = -90
x = mid then rotation = 0 
x = max then rotation = +90





## 6/27

What sort of theme?    Use the original etchaskecth theme?

Or a Bob Ross theme?  
Happy little trees?   Pixel trees?  Pixel landscape?  How?

Or some other artist theme?


(Optional Objective): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.

How to make it so that I can click and dragon the workspace instead of hover.
https://michalosman.github.io/etch-a-sketch/ - let mousedown stuff...


https://johnbdot.github.io/etch-a-sketch/#    - cool title font trick.


https://www.youtube.com/watch?v=ELUSz0L8vTA - knobs?

https://www.youtube.com/channel/UCkRvlbw8ORh0Nb2k3_avz7Q - other cool tricks



