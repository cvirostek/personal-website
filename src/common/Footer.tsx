import React from 'react';

import { Theme, Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: theme.palette.background.paper
    },
    profileLink: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}));

const Footer: React.FC = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant='body1' color='textPrimary' align='center'>
                Personal website of Connor Virostek
            </Typography>
            <Typography variant='body2' color='textSecondary' align='center'>
                <Link className={classes.profileLink} color='inherit' href='https://www.linkedin.com/in/connor-virostek/'>
                    LinkedIn
                </Link>
                |
                <Link className={classes.profileLink} color='inherit' href='https://github.com/cvirostek'>
                    GitHub
                </Link>
            </Typography>
        </footer>
    );
}

export default Footer;
