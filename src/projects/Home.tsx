import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import Dot from './dot.svg';
import cards from './cards';
import { Link as RouterLink } from 'react-router-dom';
import ConditionalWrap from '../util/ConditionalWrap';

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
    },
    cardGrid: {
        padding: theme.spacing(4)
    },
    card: {
        height: '100%'
    },
    cardAction: {
        height: '100%'
    },
    cardMedia: {
        paddingTop: '56.25%'
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
            <div className={classes.cardGrid}>
                <Grid container spacing={4}>
                    {cards.map(card => (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <Card className={classes.card}>
                                <ConditionalWrap
                                    condition={card.url !== undefined || card.route !== undefined}
                                    wrap={children => (
                                        <CardActionArea
                                            className={classes.cardAction}
                                            {...(card.url ? {href: card.url} : {})}
                                            {...(card.route ? {to: card.route, component: RouterLink} : {})}
                                        >{children}</CardActionArea>
                                    )}
                                >
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={card.thumb}/>
                                    <CardContent color='default'>
                                        <Typography gutterBottom variant='h6'>
                                            {card.title}
                                        </Typography>
                                        <Typography variant='body2' color='textSecondary'>
                                            {card.body}
                                        </Typography>
                                    </CardContent>
                                </ConditionalWrap>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Home;