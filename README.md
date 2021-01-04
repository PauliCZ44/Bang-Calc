# Bang Score Calculator

#### Video Demo: https://youtu.be/5DNiIKSvUlI

#### Description:

For my final project I made a calculator for board game called BANG!, where score points are allocated based on who survived throughout the game and wich side won.

I decided to make this app because calculating point after the game end is sometimes tedious.
The scoring system is based on the official scoring system that is used at tournaments (http://www.bang.cz/en/rules-and-faq/special-rules/64-official-tournament-scoring-system.html

Whole appliacation is made with React (that is popular javascript library). I have chosen react because i wanted the app to calculate the results in real time without need to reload the page.
I worked with react before i started CS50 so I just refreshed some basics and i was good to go. For styling I used Bootstrap 4 and my own CSS.

I based my app on this (https://github.com/fullstack-hy2020/create-app) template which is something like create-react-app only with backend solution, which i did not used yet.
Maybe in the future I will if the app is succesful. I wrote whole code in VScode and then u uploaded code on github and deployed with netlify.

So what does the app really do? First user have to choose number of players that are playing the game. Then user can choose number of rounds, they will play. User can also change name for players in table.
After that, user just needs to select right roles for all the players and toggle dead players. When the inputs are right, or if the situation inputed means that the has round ended, score for that round is calculated.
There is also a spcieal button for special situation in game where point are allocated differently. That is when renegade is dead but he made it to the duel with Sheriff.

There are 3 possible main endings:

- Law wins - sheriff and deputys gaining points, also Renegade can gain some point in particular situation.
- Outlaws wins - outlaws gain points based on their state (alive/dead), Sherif and Deputys gain zero points, and renegade gains points based on his status (dead/alive)
- Renegade wins - Renegade gains lot of points, sheriff gains little points. Other gains zero. There is also situatin where 2 Renegades are in game so I had to treat that condition right, because only one Renegade can win.

State of the appliacation is saved to React state with useState. So no data is saved. But thanks to this app is fast and respond in real time without loading.

There is also small help under this button.

Scores are automaticly summed at the right side of the table and also in the second table where are users sorted by total score. I made some controls that checs wrong user input and warns the user if something is wrong. For example if all players are dead, inputted data are wrong.
Or when roles are not assigned same should be according to rules, warning is displayed.

Main challange with implementation was to create logic for score assignment based on role, status (dead or alive) and other players status and roles. I also had to make right checks for wrong inputs.
Also there was a nice challange with making the table dynamic in real time. For each added round or player i had to dynamicly add collumns or rows. With that players had to be updated, because all information about game state is stored in players object (players are array of objects)

I wanted the app to be mobile friendly so i have chosen mobile firts approach.

### In bullet points, main funcionality is:

- Calculate score for 2-8 players
- Calculate score for more rounds
- Real-time fast computing, no realoading page
- Winner is calculated automaticly in separete table
- Simple and clean UI
- Warns user if data is wrongly inputted (roles, deaths)
- Made with React-Bootstrap
- Data are saved to local storage

## Link to app: → https://bangcalc.netlify.app/

No backend yet with this app. Just front-end. In future i will maybe add backend support to store data to server, load / save tables atd. If the project will be used.

Project based from this template https://github.com/fullstack-hy2020/create-app
