import React from 'react';
import { Card, CardMedia, Typography, CardContent, CardActionArea } from '@material-ui/core';
import Thumb from './thumb.jpg';

const CPE471Card: React.FC = () => {
    return (
        <Card className='project-card'>
            <CardActionArea
                className='project-card-action'
                href='http://users.csc.calpoly.edu/~zwood/teaching/csc471/finalW19/cviroste'>
                <CardMedia
                    className='project-card-media'
                    image={Thumb}/>
                <CardContent color='default'>
                    <Typography gutterBottom variant='h6'>
                        3D Sidescroller
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        My final project for Intro to Computer Graphics.
                        Made using C++ and OpenGL.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CPE471Card;