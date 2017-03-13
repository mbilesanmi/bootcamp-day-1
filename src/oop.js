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
