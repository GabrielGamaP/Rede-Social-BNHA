import React from 'react'
import { Box } from "@mui/material";
import {
  List,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  AvatarGroup
} from "@mui/material";

import Bakugou from "./fotos/Bakugou.jpg"
import Kaminari from "./fotos/Kaminari.jpg"
import Mina from "./fotos/Mina.jpg"
import Mirio from "./fotos/Mirio.jpg"
import Uraraka from "./fotos/Uraraka.jpg"
import Todoroki from "./fotos/Todoroki.jpg"
import Tsuy from "./fotos/Tsuy.jpg"

const Friends = () => {
  return(
    <Box p={2} sx={{ margin: 2, display: {xs: 'none', sm: 'none', md: 'block'} }}>
      <Box position="fixed" width={300} >
      <Typography variant="h6" fontWeight={400} color="#0d47a1">
         Amigos Online
        </Typography>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          <ListItem className="friend-list-item">
            <ListItemAvatar>
              <Avatar alt="Mirio" src={Mirio} />
            </ListItemAvatar>
            <ListItemText
               primaryTypographyProps={{color: '#2196f3'}}
              secondaryTypographyProps={{color: '#2196f3'}}
              primary="Mirio"
              secondary="35 Amigos em Comum"
            />
          </ListItem>
          <ListItem className="friend-list-item">
            <ListItemAvatar>
              <Avatar alt="Kaminari" src={Kaminari} />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{color: '#2196f3'}}
              secondaryTypographyProps={{color: '#2196f3'}}
              primary="Kaminari"
              secondary="39 Amigos em Comum"
            />
          </ListItem>
          <ListItem className="friend-list-item">
            <ListItemAvatar>
              <Avatar alt="Uraraka" src={Uraraka} />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{color: '#2196f3'}}
              secondaryTypographyProps={{color: '#2196f3'}}
              primary="Uraraka"
              secondary="74 Amigos em Comum"
            />
          </ListItem>
          <ListItem className="friend-list-item">
            <ListItemAvatar>
              <Avatar alt="Todoroki" src={Todoroki} />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{color: '#2196f3'}}
              secondaryTypographyProps={{color: '#2196f3'}}
              primary="Todoroki"
              secondary="26 Amigos em Comum"
            />
          </ListItem>
          
        </List>
      
        <Typography
          variant="h6" fontWeight={500} color="#0d47a1"
      >
          Sugestão de amizade 
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Bakugou" src={Bakugou} />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{color: '#2196f3'}}
          secondaryTypographyProps={{color: '#2196f3'}}
          primary="Bakugou"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#2196f3"
              >
              </Typography>
              {"Amigo de Kaminari"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Mina" src={Mina} />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{color: '#2196f3'}}
           secondaryTypographyProps={{color: '#2196f3'}}
          primary="Mina"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#2196f3"
              >
              </Typography>
              {"Amiga de Todoroki"}
            </React.Fragment>
          }
          />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Tsuy" src={Tsuy} />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{color: '#2196f3'}}
          secondaryTypographyProps={{color: '#2196f3'}}
          primary="Tsuy"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="#2196f3"
              >
              </Typography>
              {"Amiga de Uraraka"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      
      </Box>
    </Box>
  )
}

export default Friends;