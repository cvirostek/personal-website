import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './AppRouter';
import { createMuiTheme, MuiThemeProvider, makeStyles, Theme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

const useStyles = makeStyles((theme: Theme) => ({
    app: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }
}));

const App: React.FC = () => {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={darkTheme}>
            <div className={classes.app}>
                <CssBaseline />
                <Router>
                    <Header />
                    <main>
                        <AppRouter/>
                    </main>
                    <Footer />
                </Router>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
