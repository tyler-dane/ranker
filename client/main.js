import React from "react";
import ReactDOM from "react-dom";
import { Meteor } from "meteor/meteor";
import { Tracker } from "meteor/tracker";

import { Players, calculatePlayerPositions } from "./../imports/api/players";
import App from "./../imports/ui/App";

import { func } from "prop-types";

const renderPlayers = playersList => {
  return playersList.map(player => {
    return <Player key={player._id} player={player} />;
  });
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find({}, { sort: { score: -1 } }).fetch();
    let positionedPlayers = calculatePlayerPositions(players);
    let title = "Ranker";
    let version = "1.0";
    ReactDOM.render(
      <App title={title} version={version} players={positionedPlayers} />,
      document.getElementById("app")
    );
  });

  console.log(Players.find().fetch());
});
