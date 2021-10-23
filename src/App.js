import { Router } from "@reach/router";
// import { Link } from "@reach/router";

import Posts from './components/posts'
import PostForm from './components/postForm'
import './App.css'

function App() {
  return (
    <Router>
      <Posts path="/" />
      <PostForm path="/newpost" />
    </Router>
  );
}

export default App;