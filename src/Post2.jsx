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

import Shinso from "./fotos/Shinso.jpg"
import post2 from "./fotos/Post2.jpg"


const Post2 = () => {
  return (
    <Card sx={{ margin: 5, backgroundColor: '#2196f3' }}>
      
      <CardHeader
        avatar={
          <Avatar alt="Shinso" src={Shinso} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={<Typography variant="h6" sx={{color: "white"}}>Shinso</Typography>}
  subheader={<Typography variant="subtitle1" sx={{color: "white"}}>Abril 12, 2022</Typography>}
      />
      <Typography variant="h5" align="center"  sx={{ mt: 2, color: "white" }}>
        Novo Quadrinho Do All Might
      </Typography>
      
      <CardMedia
        component="img"
        height="20%"
        image={post2}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="white">
          Está oficialmente anunciado o novo capítudo do quadrinho do ALl Might contando sua história, dessa vez chegamos na aguardado batalha conta o ALl for One! 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          <Typography variant="body2" color="text.secondary"> 620 </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Typography variant="body2" color="text.secondary"> 1.2k </Typography>
      </CardActions>

        <CardContent>
        <Typography variant="subtitle1"  sx={{ mb: 2, color: "white" }}>
          Comentários:
        </Typography>
        <Typography variant="body2" color="white">
          <b>Deku:</b> Eu estou vivo para ver isso!<br />
          <b>Bakugou:</b> É melhor que tenham muitas cenas de batalha, ou eu acabo com esse autor!<br />
          <b>Todoroki:</b> Muito melhor que o Endeavor.
        </Typography>
      </CardContent>
      
      
    </Card>
  );
};
export default Post2;