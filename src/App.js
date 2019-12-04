import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import ForumBody from './components/Forum-body/ForumBody.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';

function App() {
  return (
    <div>
      <Navbar />
      <ForumBody />
      {/* <Login />
      <Signup />
      <CreatePost /> */}
    </div>
  );
}

export default App;
