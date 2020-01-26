import React from 'react'
import { Avatar, Paper, Grid, Typography, } from '@material-ui/core';

class MessageBubble extends React.Component{

    render(){
        return(
            <>
                <Grid container justify="flex-start" spacing={1}>
                    <Grid item>
                        <Avatar />
                    </Grid>
                    <Grid item xs={5}>
                        <Paper>
                            <Typography>Hello World</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </>
        );
    }
}

export default MessageBubble