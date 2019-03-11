import React from "react";

import { Players } from "./../api/players";

export default class Player extends React.Component {
  render() {
    let itemClassName = `item item--position-${this.props.player.rank}`;
    return (
      <div key={this.props.player._id} className={itemClassName}>
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">
              {this.props.player.position} place: {this.props.player.score} point(s).
            </p>
          </div>
          <div className="player__actions">
            <button
              className="fas fa-plus button button--round"
              onClick={() => {
                Players.update(this.props.player._id, { $inc: { score: 1 } });
              }}
            >
            </button>
            <button
              className="fas fa-minus button button--round"
              onClick={() => {
                Players.update(this.props.player._id, { $inc: { score: -1 } });
              }}
            >
            </button>
            <button
              className="fas fa-trash-alt button button--round"
              onClick={() => Players.remove(this.props.player._id)}
            >
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//set up Player required prop types
Player.propTypes = {
  player: React.PropTypes.object.isRequired
};

Player.defaultProps = {};
