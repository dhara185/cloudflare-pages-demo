import React, { useEffect, useState } from "react";
// import { Link } from "@reach/router";

const Post = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const onSubmit = async () => {

    	const requestOptions = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({ title: 'React POST Request Example' })
    	};
      const resp = await fetch(
        'https://cloudflare-general-assignment.dhara30a.workers.dev/posts/',
        requestOptions
      );
      const postResp = await resp.json();
      // setPost(postResp);
    };

  }, []);

  return (
     <div className="App">
        <form
            id="add-post"
            onSubmit={this.onSubmit}>
            <h2>Add Post</h2>
            <label>
                <span class="text">Title:</span>
                <input type="text" name="title"/><br/>
            </label>
            <br/>
            <label>
                <span class="text">username:</span>
                <input type="text" name="username"/><br/>
            </label>
            <label>
                <span class="text">Content:</span>
                <input type="text" name="content"/><br/>
            </label>
            <br/>
            <div class="align-right">
                <button>Submit</button>
            </div>
        </form>
    </div>
  );
};

export default Post;