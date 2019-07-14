import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Container, Typography } from '@material-ui/core';
import Dot from './dot.svg';

const useStyles = makeStyles((theme: Theme) => ({
    heroContent: {
        padding: theme.spacing(4, 0, 6),
        position: 'relative',
        '&::before': {
            background: `url(${Dot})`,
            backgroundSize: '5rem',
            backgroundPosition: 'center',
            maskImage: 'radial-gradient(closest-side, rgba(0, 0, 0, 0.06), transparent)',
            position: 'absolute',
            content: '\'\'',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
        }
    }
}));

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.heroContent}>
                <Container maxWidth='sm'>
                    <Typography variant="h4" align="center" color='textPrimary'>
                        My Projects
                    </Typography>
                    <Typography variant="h6" align="center" color='textSecondary'>
                        A selection of programming projects that I've
                        enjoyed working on for school or in my free time.
                    </Typography>
                </Container>
            </div>
        </div>
    );
}

export default Home;