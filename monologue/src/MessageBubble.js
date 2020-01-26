import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Paper, Grid, Typography, } from '@material-ui/core';

class MessageBubble extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                <Grid container justify="flex-start" spacing={1}>
                    <Grid item>
                        <Avatar />
                    </Grid>
                    <Grid item xs={5}>
                        <Paper>
                            <Typography>{this.props.message}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </>
        );
    }
}

MessageBubble.propTypes = {
    message: PropTypes.string.isRequired,
};

export default MessageBubble