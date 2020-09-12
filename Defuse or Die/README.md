Defuse or Die is a game developed by Timothy Gee(programmer), Johnny Luo(programmer), Reese Chong(Artist), and Benjamin Tran(Artist).
The original repo can be found at https://github.com/jluo42/FinalGame and played at https://jluo42.itch.io/cmpm-120-game-defuse-or-die.
This version of Defuse or Die is my own variation in which I sought to slightly improve the game. I have not currently uploaded my
variation online directly to play the game, however all the code is here. Below are the changes I have implemented.



Defuse or Die Variation

New MiniGame:
-Player (bombDefuser) has to get to the scene of where the bomb is
-Imitating a platformer/Endless Runner type game through tile scrolling 
-Arrow keys to control character (imagine he has a jetpack, because he can fly)
-Dodge cars and helicopters
-Survive when Timer ends to start next state

Mechanic Changes: (Desire to be Harder and put more stress on player)
-On numpad mechanic, player error now ends game instead of subtracting time from timer
-Game Now Loops between numpad and wire cutting mechanic 3 times
-Game music speeds up per loop iteration
-Game Timer changed per loop iteration


Minor Changes and fixes:
-background music correctly plays when player press play again option
-fixed sound bug on numpad presses
-added cheer sound on game win screen