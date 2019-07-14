import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import { Theme, Button, Avatar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    toolbarItem: {
        marginRight: theme.spacing(2)
    }
}));

const Header: React.FC = () => {
    const classes = useStyles();

    return (
        <header>
            <AppBar position='static' color='inherit'>
                <Toolbar>
                    <Avatar className={classes.toolbarItem}>CV</Avatar>
                    <Button className={classes.toolbarItem} component={RouterLink} to='/'>
                        Home
                    </Button>
                    <Button className={classes.toolbarItem} component={RouterLink} to='/about'>
                        About
                    </Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;
