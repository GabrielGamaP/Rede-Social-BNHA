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

import Mirko from "./fotos/Mirko.jpg"
import post3 from "./fotos/Post3.jpg"


const Post = () => {
  return (
    <Card sx={{ margin: 5, backgroundColor: '#2196f3' }}>
      
      <CardHeader
        avatar={
          <Avatar alt="Mirko" src={Mirko} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={<Typography variant="h6" sx={{color: "white"}}>Mirko</Typography>}
  subheader={<Typography variant="subtitle1" sx={{color: "white"}}>Abril 10, 2022</Typography>}
      />
      <Typography variant="h5" align="center"  sx={{ mt: 2, color: "white" }}>
        Feliz Aniversário Hawks!
      </Typography>
      
      <CardMedia
        component="img"
        height="20%"
        image={post3}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body1" color="white">
          Feliz aniversário lindão! Obrigado por continuar sendo meu companheiro dps de tantos anos, ainda vamos derrotar muitos vilões juntos, estou contando com vc! S2
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          <Typography variant="body2" color="text.secondary"> 4.7k </Typography>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Typography variant="body2" color="text.secondary"> 10.2k </Typography>
      </CardActions>

        <CardContent>
        <Typography variant="subtitle1"  sx={{ mb: 2, color: "white" }}>
          Comentários:
        </Typography>
        <Typography variant="body2" color="white">
          <b>Hawnks:</b> Nãoprecisava postar isso..<br />
          <b>All Might:</b> Parabéns Hawks! Espero que fique bem, Jovem!<br />
          <b>Endeavor:</b> Parabéns.
        </Typography>
      </CardContent>
      
      
    </Card>
  );
};
export default Post;