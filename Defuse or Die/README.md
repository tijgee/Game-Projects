Defuse or Die is a game developed by Timothy Gee(programmer), Johnny Luo(programmer), Reese Chong(Artist), and Benjamin Tran(Artist).
The original repo can be found at https://github.com/jluo42/FinalGame and played at https://jluo42.itch.io/cmpm-120-game-defuse-or-die.
This version of Defuse or Die is my own variation in which I sought to slightly improve the game. I have not currently uploaded my
variation online directly to play the game, however all the code is here. Below are the changes I have implemented.



Defuse or Die Variation

New MiniGame:<br/>
-Player (bombDefuser) has to get to the scene of where the bomb is<br/>
-Imitating a platformer/Endless Runner type game through tile scrolling <br/>
-Arrow keys to control character (imagine he has a jetpack, because he can fly)<br/>
-Dodge cars and helicopters<br/>
-Survive when Timer ends to start next state<br/>
<br/>
Mechanic Changes: (Desire to be Harder and put more stress on player)<br/>
-On numpad mechanic, player error now ends game instead of subtracting time from timer<br/>
-Game Now Loops between numpad and wire cutting mechanic 3 times<br/>
-Game music speeds up per loop iteration<br/>
-Game Timer changed per loop iteration<br/>

<br/>
Minor Changes and fixes:<br/>
-background music correctly plays when player press play again option<br/>
-fixed sound bug on numpad presses<br/>
-added cheer sound on game win screen<br/>