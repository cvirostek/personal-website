import React from 'react';
import { Card, CardMedia, Typography, CardContent, CardActionArea } from '@material-ui/core';
import Thumb from './thumb.png';

const CPE476Card: React.FC = () => {
    return (
        <Card className='project-card'>
            <CardActionArea
                className='project-card-action'
                href='http://users.csc.calpoly.edu/~zwood/teaching/csc476/final19/Curve/'>
                <CardMedia
                    className='project-card-media'
                    image={Thumb}/>
                <CardContent color='default'>
                    <Typography gutterBottom variant='h6'>
                        Marble Game
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        My final project for Real-Time 3D Comp Graphics Software.
                        Made using C++ and OpenGL.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CPE476Card;