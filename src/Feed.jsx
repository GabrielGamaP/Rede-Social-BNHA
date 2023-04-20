import React from 'react'
import Post from "./Post";
import Post2 from "./Post2";
import Post3 from "./Post3";
import { Box } from "@mui/material";


const Feed = () => {
  return(
    <Box>
      <Post/>
      <Post2/>
      <Post3/>
    </Box>
  );
};  

export default Feed;