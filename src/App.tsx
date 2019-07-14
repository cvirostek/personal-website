import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import AppRouter from './AppRouter';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={darkTheme}>
            <div className='App'>
                <CssBaseline />
                <Header />
                <main>
                    <AppRouter/>
                </main>
                <Footer />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
