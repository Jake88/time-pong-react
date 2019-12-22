import React from 'react'

import {
} from './styles'

/*
 TODO: Two new game changer cards that extend the time and reduce the time for x number fo rounds
 TODO: Split the card json into the sets
*/

const CardBack = ({isFlipped}) => {
  return (
    <React.Fragment>
<div class="wrapper layout vertical">
      <div class="panel layout vertical flex">
        <h2>Time Pong</h2>
        <div class="panel-head layout horizontal">
          <div class="panel-head-corner">
          </div>
          <div class="panel-head-header layout vertical">
            <iron-icon class="type-icon" icon="tp-utility-icons:logo"></iron-icon>
          </div>
          <div class="panel-head-corner">
          </div>
        </div>

        <div class="panel-content layout vertical flex end-justified">
          <div>
            <h2>Getting drunk?</h2>
            <div class="layout horizontal answers">
              <div id="drinking" class="answer drunk layout flex vertical" on-tap="selectCard">
                <iron-icon icon="tp-card-images:no-mercy"></iron-icon>
                <h2>Yes</h2>
              </div>
              <div id="nonDrinking" class="answer sober layout flex vertical" on-tap="selectCard">
                <iron-icon icon="tp-utility-icons:angel"></iron-icon>
                <h2>No</h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    </React.Fragment>
  )
}

export default CardBack
