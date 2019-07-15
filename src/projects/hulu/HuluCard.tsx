import React from 'react';
import { Card, CardMedia, Typography, CardContent, makeStyles, Theme, CardActionArea } from '@material-ui/core';
import Thumb from './thumb.png';

const useStyles = makeStyles((theme: Theme) => ({
    cardMedia: {
        paddingTop: '56.25%'
    }
}));

const HuluCard: React.FC = () => {
    const classes = useStyles();

    return (
        <Card>
            <CardActionArea href='https://chrome.google.com/webstore/detail/hulu-ad-blocker/edbgmecmoefpnbkhgenlpijpjpnapenm'>
                <CardMedia
                    className={classes.cardMedia}
                    image={Thumb}/>
                <CardContent color='default'>
                    <Typography gutterBottom variant='h6'>
                        Hulu Ad Blocker
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        A Google Chrome extension which bypasses Hulu's
                        ad blocker detection to skip video ads.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default HuluCard;