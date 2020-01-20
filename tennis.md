### L'exercice

Le but de cet exercice est de construire une simulation de calcul de score d'un 
jeu de tennis en faisant exclusivement du TDD.

### Les regles sont:

1- Un jeu est gagné par le premier joueur qui a mis au moins 4 points au total et a au moins 2 points de plus
que son adversaire.

2- Le score d'un joueur pour un jeu va de 0 a 3 points (0 inclu) et chaque point est respectivement egal a
"0", "15", "30", "40"

3- Si au moins 3 points ont été inscrit par chaque joueur et leur deux scores sont égaux, on dit que le score est "deuce"

4- Si au moins 3 points ont été inscrit par chaque joueur, mais qu'un des joueurs a juste un point de plus que l'autre
on dit qu'il y a "avantage"

### Implementation

Construisons une classe "TennisGame".
Cette classe doit avoir un constructeur qui prend les 2 nom de joueurs en parametre.
Cette classe doit avoir une methode "scorePlayerOne" et "scorePlayerTwo" qui incremente le score des joueurs.
Cette classe doit avoir une methode "displayScore" qui affiche le score actuel.

```javascript
let game = (new TennisGame("André", "Pete"));
game.displayScore() # => "0-0"
game.scorePlayerOne()
game.displayScore() # => "15-0"
game.scorePlayerOne()
game.scorePlayerOne()
game.displayScore() # => "40-0"
game.scorePlayerTwo()
game.scorePlayerTwo()
game.scorePlayerTwo()
game.displayScore() # => "deuce"
game.scorePlayerTwo()
game.displayScore() # => "Avatange! Pete."
game.scorePlayerOne()
game.displayScore() # => "deuce"
game.scorePlayerTwo()
game.scorePlayerTwo()
game.displayScore() # => "Nous avons un gagnant: Pete."
```
