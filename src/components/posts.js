import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

import {Card, CardContent, Typography, Icon, IconButton } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {

      const resp = await fetch(
        "https://cloudflare-general-assignment.dhara30a.workers.dev/posts",
      );
      // console.log(resp)
      const postsResp = await resp.json();
      // console.log(postsResp)
      setPosts(postsResp);
      // console.log(posts)
    };

    getPosts();
  }, []);

  return (
    <div className="allPost">
      <div>
        <h2>Posts</h2>
        <Link to="/newpost" className="btn btn-primary">Add new post</Link>
      </div>
      
      {posts.map((post) => (
        <div className="post">
          <Card variant="outlined" sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">{post.title}</Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                by {post.username}
              </Typography>
              <Typography variant="body2">
              {post.content}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
      
    </div>
  );
};

export default Posts;