import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import ForumBody from './components/Forum-body/ForumBody.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import CommentPost from './components/CommentPost/CommentPost.js';

function App() {
  return (
    <div>
      {/* <Navbar />
      <ForumBody />
      <Login />
      <Signup /> */}
      <CreatePost />
      <CommentPost />
    </div>
  );
}

export default App;
