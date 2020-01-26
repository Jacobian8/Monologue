import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import {Grid, List, Divider, Drawer, TextField, ListItem, ThemeProvider, Container, Box, AppBar, Toolbar, Typography, CssBaseline, Paper, Backdrop, Modal} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import {blue, red} from '@material-ui/core/colors/purple';
import { withStyles } from '@material-ui/core/styles';
import MonologueAppbar from './MonologueAppbar.js';
import MessageBubble from './MessageBubble.js'
import './App.css';
import MusicPlayer from './MusicPlayer';

import * as firebase from 'firebase';
const app = firebase.initializeApp({
  apiKey: 'AIzaSyCfnaKZmm3ytS64A-x7Dm3d-pLckN18Dog',
  authDomain: 'localhost',
  projectId: 'monologue-266217'
});

const db = app.firestore();

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});

const drawerWidth = 240;
const appbarHeight = 64;
const styles = theme => ({
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
  musicModal: {
    height: '90%',
    width: '90%',
  },
});

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      breakTime: false
    }
    this.rootRef = React.createRef();
    this.messages = [];
    this.notifications = [];
  }
  
  componentDidMount() {
    setInterval(
      this.triggerMusic,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  triggerMusic = async () => {
    console.log(this.state.breakTime)
    // await this.setState((state) => {
    //   return ({breakTime: !state.breakTime});
    // });
    if(!this.state.breakTime){
      this.getMessages();
    }
  }

  getMessages = () => {
    db.collection('notifs').get()
    .then((snapshot) => {
      let new_list = []
      snapshot.forEach((doc) => {
        new_list.push(doc.data()['text']);
      });
      this.notifications = new_list;     
      this.updateMessagesList(new_list);
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
  }

  updateMessagesList = (notifications) => {
    this.messages = [];
    notifications.forEach(element => {
      console.log(element);
      this.messages.push(<Grid><MessageBubble message={element}/></Grid> );
    });
    this.forceUpdate();
  }
  

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <ThemeProvider theme={theme}>      
          </ThemeProvider>
            <MonologueAppbar rootRef={this.rootRef} classes={classes}/>
          <Drawer
          variant="permanent"
          anchor="left"
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          >
            <List>
              <ListItem>Slack</ListItem>
              <ListItem>Twitter</ListItem>
            </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container direction='column' justify='flex-end' className={classes.messages}>
              <Grid container item direction="column" justify='flex-end' className={classes.chatBubbles} xs={10}>
                {this.messages}
              </Grid>
              <Divider />
              <Grid item>
                <TextField variant='outlined' label='Message' className={classes.messageInput} xs={2}></TextField>
              </Grid>
          </Grid>
        </main>
        {this.state.breakTime &&
          <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.musicModal}
          open={true}
          closeAfterTransition
          BackdropProps={{
              timeout: 500,
          }}
          >
            <MusicPlayer />
          </Modal>
        }
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);