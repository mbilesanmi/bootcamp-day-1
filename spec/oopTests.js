/**
* Created by Maranatha Ilesanmi on 3/11/2017.
*/

(function(){
    'use strict';

    describe("Sports Class: Create a sport", function() {
0
        it("The sport should be a type of `object`, and an instance of the `Sports` class", function() {
            var football = new Sports('Football');
            expect(typeof football).toEqual(typeof {});
            expect(football instanceof Sports).toBeTruthy();
        });

        it("The sport should be a type of `object`, and an instance of the `Sports` class", function() {
            var football = new Sports('Football');
            expect(typeof football).toEqual(typeof {});
            expect(football instanceof Sports).toBeTruthy();
        });

        it("The sport name and teamSize should be a property of the sport", function() {
            var football  = new Sports('Football', 11);
            expect(football.name).toBe('Football');
            expect(football.teamSize).toBe(11);
        });

        it("The sport should be a teamsport except its has only one player", function() {
            var tennis  = new Sports('Tennis', 1);
            expect(tennis.teamSize).toBe(1);

            var doubleTennis  = new Sports('doubleTennis', 2);
            expect(doubleTennis.teamSize).toBe(2);

            var basketball = new Sports('Basketball', 5);
            expect(basketball.teamSize).toBe(5);

            expect((function(){return new Sports('Basketball', 5, 'court');}()).playingSurface).toBe('court');
        });

        it("The sport duration should return '7 holes' for the Golf instance", function() {
            var golf = new Sports('Golf', 2, 'course', '7 holes');
            expect(golf.duration).toBe('7 holes');
        });

    });
})();