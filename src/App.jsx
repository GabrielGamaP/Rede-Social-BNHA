import Feed from "./Feed";
import Friends from "./Friends";
import Navbart from "./Navbar";
import { Box, Grid } from "@mui/material";
import './App.css'

export default function App() {
  return (
    <Box className="BoxApp">
      <Navbart/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} columns={6} ustifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Feed/>
          </Grid>
          <Grid item xs={12} md="auto">
            <Friends/>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
};