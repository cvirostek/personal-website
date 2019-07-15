interface ProjectCardData {
    title: string,
    body: string,
    url?: string,
    route?: string,
    thumb: string
}

const cards: ProjectCardData[] = [
    {
        title: 'Hulu Ad Blocker',
        body: 'A Google Chrome extension which bypasses Hulu\'s ad blocker detection to skip video ads.',
        url: 'https://chrome.google.com/webstore/detail/hulu-ad-blocker/edbgmecmoefpnbkhgenlpijpjpnapenm',
        thumb: require('./thumbs/hulu.png')
    },
    {
        title: '3D Sidescroller',
        body: 'My final project for Intro to Computer Graphics. Made using C++ and OpenGL.',
        url: 'http://users.csc.calpoly.edu/~zwood/teaching/csc471/finalW19/cviroste',
        thumb: require('./thumbs/cpe471.jpg')
    },
    {
        title: 'Marble Game',
        body: 'My final project for Real-Time 3D Comp Graphics Software. Made using C++ and OpenGL.',
        url: 'http://users.csc.calpoly.edu/~zwood/teaching/csc476/final19/Curve/',
        thumb: require('./thumbs/cpe476.png')
    }
];

export default cards;