import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { grey } from '@material-ui/core/colors';

export default function createMyTheme(options: ThemeOptions) {
    const dark: boolean = options.palette !== undefined && options.palette.type === 'dark';
    return createMuiTheme({
        ...options,
        palette: {
            ...(options.palette),
            background: {
                ...(options.palette && options.palette.background),
                level1: (dark ? grey['A400'] : grey['300'])
            }
        }
    });
}