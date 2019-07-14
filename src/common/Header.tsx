import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header: React.FC = () => {
    return (
        <header>
            <AppBar position='static' color='inherit'>
                <Toolbar>
                    <Typography variant='h6'>
                        CV
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;
