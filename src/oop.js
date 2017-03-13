/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */

function Sports(name, teamSize, playingSurface, duration){
    if (name === null) {
        return "Invalid input"
    } else {
        this.name = name;
        this.teamSize = teamSize;
        this.playingSurface = playingSurface;
        this.duration = duration;
    }
}

Sports.prototype = {
    teamSport: function(){
        if (this.name === "") {
            return "Invalid input";
        } else {
            if (this.teamSize >= 2) {
                return this.name + " is a team sport involving " + this.teamSize + " players!";
            } else if (this.teamSize == 1) {
                return this.name + " is an individual sport involving 1 player!";
            } else {
                return "Invalid input";
            }
        }
    },

    whatToUse: function(equipment){
        if ((this.name === "") || (equipment === null)) {
            return "Invalid input"
        } else {
            if ((this.name == "Football") || (this.name == "Basketball")) {
                return this.name + " is a sport played using a " + this.name + ".";
            } else {
                return this.name + " is a sport played using a (pair of) " + this.name + " " + equipment + ".";
            }
        }
    },

    whereItsPlayed: function() {
        if (this.name === "")  {
            return "Invalid input"
        } else  {
            return this.name + " is a sport played on/in a(n) " + this.name + " " + this.playingSurface + ".";
        }
    },

    duration: function() {
        return this.name + " is played for " + duration;
    }
};

function sportBets(name, duration, team1, team2, odds) {
    Sports.call(this, name, duration);

    this.odds = odds;
    this.team1= team1;
    this.team2 = team2;
}

sportBets.prototype = Object.create(Sports.prototype);
sportBets.prototype.constructor = sportBets;
sportBets.prototype.betOdds = function() {
    if (this.odds < 1.5) {
        return "Very likely to win!";
    } else if (this.odds < 2.5) {
        return "Tie/draw is likely!"
    } else {
        return "A win is highly unlikely."
    }
}

var football = new Sports("Football", "11", "pitch");
var basketball = new Sports("Basketball", "5", "court");
var tennis = new Sports("Tennis", "1", "court");
var doublesTennis = new Sports("Doubles Tennis", "2", "court");
var squash = new Sports("Squash", "1", "court");
var golf = new Sports("Golf", "1", "course");
var boxing = new Sports("Boxing", "1", "ring");

var noname = new Sports("", "1", "ring");


console.log(noname.whereItsPlayed());
console.log(noname.teamSport());
console.log(noname.whatToUse());
console.log('');

//console.log(football);
console.log(football.teamSport());
console.log(tennis.teamSport());
console.log(doublesTennis.teamSport());
console.log(basketball.teamSport());
console.log(boxing.teamSport());
console.log(golf.teamSport());
console.log('');

console.log(boxing.whatToUse("gloves"));
console.log(football.whatToUse("ball"));
console.log(tennis.whatToUse("racket and tennis ball"));
console.log(golf.whatToUse("club and ball"));
console.log('');

console.log(boxing.duration("12 rounds"));
console.log(football.duration("90 minutes"));
console.log(tennis.duration("3 - 5 sets"));
console.log(golf.duration("10 holes"));
console.log('');

console.log(boxing.whereItsPlayed());
console.log(golf.whereItsPlayed());
console.log(squash.whereItsPlayed());
console.log(football.whereItsPlayed());