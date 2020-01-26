import React from 'react';
import PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import {AppBar, Typography, Toolbar, IconButton, Menu, MenuItem, Modal, Fade, Paper, Grid, CardActions, CardMedia, Card, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';



const styles = theme => ({
    accountIcon:{
    
    },
    modalPaper:{
        height: '90%',
        width: '90%',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

class MonologueAppbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false
        };
    }

    handleMenu = () => {
        this.setState((state) => {
            return {modal: !state.modal};
          });
    }
    
    connectSlack = () => {
        window.open("https://slack.com/oauth/authorize?client_id=881911229938.910783800067&scope=ifttt");
    }

    render(){
        const { classes } = this.props;
        return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                Monologue
                </Typography>
                <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                    className={classes.accountIcon}
                >
                    <AccountCircle />
                </IconButton>
                </div>
            </Toolbar>
            </AppBar>
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                onClose={this.handleMenu}
                open={this.state.modal}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
                >
                    <Fade in={this.state.modal}>
                        <Paper className={classes.modalPaper}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Typography variant="h6" noWrap>Connect Services</Typography>
                                </Grid>
                                <Grid item xs={3} alignItems='center'>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            image={"/static/images/cards/Elon.jpg"}
                                            title="Slack"
                                        />
                                        <CardActions>
                                            <IconButton aria-label="Add" onClick={this.connectSlack}>
                                                <AddIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs={3}>
                                    
                                </Grid>
                            </Grid>
                        </Paper>
                    </Fade>
                </Modal>
        </div>
        );
    }
}

MonologueAppbar.propTypes = {
    classes: PropTypes.object.isRequired,
    rootRef: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonologueAppbar);