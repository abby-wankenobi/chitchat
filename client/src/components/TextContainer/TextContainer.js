import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.scss';

const TextContainer = ( { users } ) => (
    <div className="textContainer">
        <div>
            <span>Welcome to</span><br/><h1 className="title">ChitChat</h1>
        </div>
        {
        users
              ? (
                <div>
                  <h3 className="online">Online</h3>
                  <div className="activeContainer">
                    <h2>
                      {users.map( ( { name } ) => (
                        <div key={ name } className="activeItem">
                          { name }
                          <img alt="Online Icon" src={ onlineIcon }/>
                        </div>
                      ))}
                    </h2>
                  </div>
                </div>
              )
              : null
          }
    </div>
);

export default TextContainer;