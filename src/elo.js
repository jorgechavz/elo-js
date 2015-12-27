var Elo = (function(window, undefined){

  'use strict';

  // K factor used in USCF
  var kfactor;

  var raitingA;
  var raitingB;

  var scoreA;
  var scoreB;

  var expectedA;
  var expectedB;

  var newRatingA;
  var newRatingB;

  /* Constructor */
  function Elo(raitingA, raitingB, scoreA, scoreB){

    this.kfactor = 16;

    this.ratingA = raitingA;
    this.ratingB = raitingB;
    this.scoreA   = scoreA;
    this.scoreB   = scoreB;

    var expectedScores = this.getExpectedScores(this.ratingA,this.ratingB);
    this.expectedA = expectedScores.a;
    this.expectedB = expectedScores.b;

    var newRatings = this.getNewRatings(this.ratingA,this.ratingB, this.expectedA, this.expectedB, this.scoreA, this.scoreB);
    this.newRatingA = newRatings.a;
    this.newRatingB = newRatings.b;

  }

  //Get new ratings
  Elo.prototype.getNewRatings = function (ratingA,ratingB,expectedA,expectedB,scoreA,scoreB) {
    var newRatingA = ratingA + ( this.kfactor * ( scoreA - expectedA ) );
    var newRatingB = ratingB + ( this.kfactor * ( scoreB - expectedB ) );

    return {
        a : newRatingA,
        b : newRatingB
    };
  }

  //Get the 'expected' value
  Elo.prototype.getExpectedScores = function (ratingA,ratingB) {
    var expectedScoreA = 1 / ( 1 + ( Math.pow( 10 , ( ratingB - ratingA ) / 400 ) ) );
    var expectedScoreB = 1 / ( 1 + ( Math.pow( 10 , ( ratingA - ratingB ) / 400 ) ) );

    return {
        a : expectedScoreA,
        b : expectedScoreB
    }
  }

  // Setter
  Elo.prototype.setNewSettings = function (raitingA, raitingB, scoreA, scoreB) {
    this.ratingA = raitingA;
    this.ratingB = raitingB;
    this.scoreA   = scoreA;
    this.scoreB   = scoreB;

    var expectedScores = this.getExpectedScores(this.ratingA,this.ratingB);
    this.expectedA = expectedScores.a;
    this.expectedB = expectedScores.b;

    var newRatings = this.getNewRatings(this.ratingA,this.ratingB, this.expectedA, this.expectedB, this.scoreA, this.scoreB);
    this.newRatingA = newRatings.a;
    this.newRatingB = newRatings.b;
  }

  //Getter
  Elo.prototype._getNewRatings = function () {
    return {
      a : this.newRatingA,
      b : this.newRatingB
    }
  }


  return Elo;

})(window);
