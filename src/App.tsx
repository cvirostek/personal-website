import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { MuiThemeProvider, makeStyles, Theme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import createMyTheme from './util/createMyTheme';

const darkTheme = createMyTheme({
    palette: {
        type: 'dark',
        background: {
            default: grey['900']
        }
    }
});

/*
const lightTheme = createMyTheme({
    palette: {
        type: 'light'
    }
});
*/

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
                        <AppRoutes />
                    </main>
                    <Footer />
                </Router>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
