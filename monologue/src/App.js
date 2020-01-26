import React from 'react';
import logo from './logo.svg';
import {Grid, List, Divider, Drawer, TextField, ListItem, ThemeProvider, Container, Box, AppBar, Toolbar, Typography, CssBaseline, Paper} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import {blue, red} from '@material-ui/core/colors/purple';
import { makeStyles } from '@material-ui/core/styles';
import MonologueAppbar from './MonologueAppbar.js';
import MessageBubble from './MessageBubble.js'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

const drawerWidth = 240;
const appbarHeight = 64;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    padding: 0,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  messages: {
    height: `calc(100% - ${appbarHeight}px)`,
  },
  chatBubbles:{
    padding: theme.spacing(1),
  },
  messageInput:{
    padding: theme.spacing(1),
  },
  appBar: {
    height: appbarHeight,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function App() {
  const rootRef = React.useRef(null);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ThemeProvider theme={theme}>      
        </ThemeProvider>
          <MonologueAppbar rootRef={rootRef} classes={classes}/>
        <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        >
          <List>
            <ListItem>item</ListItem>
            <ListItem>item</ListItem>
            <ListItem>item</ListItem>
          </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction='column' justify='flex-end' className={classes.messages}>
            <Grid container direction='column' justify='flex-end' className={classes.chatBubbles}>
              <MessageBubble />
              <MessageBubble />
              <MessageBubble />
            </Grid>
            <Divider />
            <TextField variant='outlined' label='Message' className={classes.messageInput}></TextField>
        </Grid>
      </main>
    </div>
  );
};

export default App;
