import { TypeBackground } from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface TypeBackground {
        level1: string,
    }
}