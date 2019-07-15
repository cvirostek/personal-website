import React from 'react';
import { Card, CardMedia, Typography, CardContent, CardActionArea } from '@material-ui/core';
import Thumb from './thumb.png';

const HuluCard: React.FC = () => {
    return (
        <Card className='project-card'>
            <CardActionArea
                className='project-card-action'
                href='https://chrome.google.com/webstore/detail/hulu-ad-blocker/edbgmecmoefpnbkhgenlpijpjpnapenm'>
                <CardMedia
                    className='project-card-media'
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