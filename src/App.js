import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    // BEM
    <div className="app">
      <div className="app-header">
        <img className="app-headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
     <Post />
     <Post />
     <Post />
     <Post />
     <Post />
     <Post />
   
     
    </div>
  );
}

export default App;
