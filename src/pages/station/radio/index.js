import React from 'react';
import Logo from "./img/logo/logo.png";
import Data from '../../../utils/data';
import "../../../css/style.css";
import "../../../css/global.css";
import player from "../../../utils/player.js"

// import { Container } from './styles';

function Radio(props) {
    const radioName = Data.map(value => value.radioName);
    const radio = radioName.indexOf(props.match.params.radio)
    
    const dados = Data.filter(value => value.radioName == props.match.params.radio)

    window.addEventListener("load", () => {
        player.start(radio);
    });

    return (
        <div className="App">
          <a className="btn-floating btn-large black">
            <i className="large material-icons">apps</i>
          </a>
          <header className="App-header">
            <div id="player-controls">
              <h4>
                <i className="material-icons">equalizer</i>WebRadio
              </h4>
              <div className="card">
                <img src={Logo} className="App-logo" alt="logo" />
                <div className="card-image">
                  <a
                    onclick="togglePlayPause()" 
                    className="btn-floating btn-large halfway-fab"
                  >
                    <i className="material-icons" id="play-pause">
                      play_arrow
                    </i>
                  </a>
                </div>
                <div className="card-content">
                  <h5 className="Title">Ouvindo</h5>
                  <p className="station">{dados[0].station}</p>
                  <div className="row valign-wrapper" id="player-controls">
                    <div>
                      <a onclick="toggleMute()">
                        <i className="material-icons" id="volume-icon">
                          volume_up
                        </i>
                      </a>
                    </div>
                    <div className="col s12 range-field valign-wrapper" id="volume">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        id="volume-control"
                        step="1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      );
    
}

export default Radio;