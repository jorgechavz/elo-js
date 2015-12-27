# Elo
Elo Rating System

## Wikipedia

The Elo rating system is a method for calculating the relative skill levels of players in competitor-versus-competitor games such as chess.


## How to use
Import the library file
```html
<script type="text/javascript" src="src/elo.js"></script>
```

## Use it like a normal script
For example
```html
<script>
  /*
    Where the arguments are
    A = Current rating for player A
    B = Current rating for player B
    C = Score for player A
    D = Score for player B
   */
  var A = 1600;
  var B = 1200;
  var C = 0.5;
  var D = 0.5;

  var player  = new Elo(A, B, C, D);

</script>
```



## Author

Jorge Chavez https://github.com/jorgechavz

## Licence
The MIT License (MIT)

See [LICENCE](https://github.com/jorgechavz/elo-js/blob/master/LICENSE) for details.
