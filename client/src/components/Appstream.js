import React from 'react';
import './../App.css';

function Appstream() {
  // const imageArray = []
  // for( let i= 0;i < 2 ;i ++ ) imageArray.push( <img src={'/stream/1'} className="App-logo" alt="logo" /> )
  return (
    <div className="App">
      <header className="App-header">
        <div className="livestream">
          <img src={'/stream/0'} className="App-logo" alt="logo" />
        </div>
        <div className="livestream">
          <img src={'/stream/1'} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default Appstream;
