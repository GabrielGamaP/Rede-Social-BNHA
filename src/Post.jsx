import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  
} from "@mui/material";

import Deku from "./fotos/Deku.jpg"
import post1 from "./fotos/Post1.jpg"


const Post = () => {
  return (
    <Card sx={{ margin: 5, backgroundColor: '#2196f3' }}>
      
      <CardHeader
        avatar={
          <Avatar alt="Deku" src={Deku} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={<Typography variant="h6" sx={{color: "white"}}>Deku</Typography>}
  subheader={<Typography variant="subtitle1" sx={{color: "white"}}>Abril 14, 2022</Typography>}
      />
      <Typography variant="h5" align="center"  sx={{ mt: 2, color: "white" }}>
        A melhor turma na melhor época
      </Typography>
      
      <CardMedia
        component="img"
        height="20%"
        image={post1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="white">
          Acabei encontrando essa foto jogada na minha gaveta hoje de manhã, sinto falta dos nossos momentos de escola, vcs sempre serão os melhores companheiros, espero que todos estejam bem, abraço!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          <Typography variant="body2" color="text.secondary"> 302 </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Typography variant="body2" color="text.secondary"> 542 </Typography>
      </CardActions>

        <CardContent>
        <Typography variant="subtitle1"  sx={{ mb: 2, color: "white" }}>
          Comentários:
        </Typography>
        <Typography variant="body2" color="white">
          <b>Uraraka:</b> isso é tão nostálgico!<br />
          <b>Mineta:</b> Ainda que todos conseguimos, passei raspando kkkkk<br />
          <b>Aizawa:</b> Nunca vi uma turma pra me dar tanto trabalho, mas vcs foram sinto falta de todos.
        </Typography>
      </CardContent>
      
      
    </Card>
  );
};
export default Post;