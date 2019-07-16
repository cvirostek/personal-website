import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    heroContent: {
        padding: theme.spacing(4, 0, 4)
    }
}));

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth='sm' className={classes.heroContent}>
                <Typography variant='h4' align='center' color='textPrimary'>
                    About
                </Typography>
            </Container>
            <Container maxWidth='md'>
                <Typography variant='body1' color='textSecondary'>
                    My name is Connor Virostek. I am a 4th year Computer Science
                    student at Cal Poly SLO. One thing I enjoy doing in my free time
                    is working on programming projects. If I like how something
                    turned out, I'll put it on this website.
                </Typography>
            </Container>
        </div>
    );
}

export default Home;