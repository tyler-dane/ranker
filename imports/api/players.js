import { Mongo } from "meteor/mongo";
import numeral from "numeral";
import './../stats/nbaPlayers';

export const Players = new Mongo.Collection("players");
//change to arrow func
//make this iterable (e.g. by looping over list of objects)
//to remove entire collection from shell: db.players.remove({})
export function setDefaultNbaPlayers() {
        console.log('inserting defaults')
        Players.insert({"name": "Kareem Abdul-Jabbar", "score": 38387});
        Players.insert({"name": "Karl Malone", "score": 36928});
        Players.insert({"name": "Kobe Bryant", "score": 33643});
        Players.insert({"name": "LeBron James", "score": 32304});
        Players.insert({"name": "Michael Jordan", "score": 32292});
    }
    console.log("count is: " + Players.find({}, {}).count());

export const calculatePlayerPositions = players => {
  let rank = 1;

  return players.map((player, index) => {
    if (index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      rank,
      position: numeral(rank).format("0o")
    };
  });
};
