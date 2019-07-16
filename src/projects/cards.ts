interface ProjectCardData {
    title: string,
    body: string,
    url?: string,
    route?: string,
    thumb: string
}

const cards: ProjectCardData[] = [
    {
        title: 'Marble Game',
        body: 'My final project for Real-Time 3D Comp Graphics Software. A marble game made using C++ and OpenGL.',
        url: 'http://users.csc.calpoly.edu/~zwood/teaching/csc476/final19/Curve/',
        thumb: require('./thumbs/cpe476.png')
    },
    {
        title: '3D Sidescroller',
        body: 'My final project for Intro to Computer Graphics. A sidescroller game made using C++ and OpenGL.',
        url: 'http://users.csc.calpoly.edu/~zwood/teaching/csc471/finalW19/cviroste',
        thumb: require('./thumbs/cpe471.jpg')
    },
    {
        title: 'Hulu Ad Blocker',
        body: 'A Google Chrome extension which bypasses Hulu\'s ad blocker detection to skip video ads.',
        url: 'https://chrome.google.com/webstore/detail/hulu-ad-blocker/edbgmecmoefpnbkhgenlpijpjpnapenm',
        thumb: require('./thumbs/hulu.png')
    },
    {
        title: 'GroupMe Bot',
        body: 'An interactive bot for GroupMe which performs a variety of actions.',
        url: 'https://github.com/cvirostek/GroupMe-Bot',
        thumb: require('./thumbs/groupme.png')
    },
    {
        title: 'the-real-connor.me',
        body: 'This website was built with React, and is hosted on my VPS via Nginx.',
        route: '/',
        thumb: require('./thumbs/mywebsite.png')
    },
    {
        title: 'Bike Shop Website',
        body: 'My final project for Software Engineering I. A bike shop website built with Vue and Express.',
        url: 'https://github.com/CSC307Winter2019/Group1',
        thumb: require('./thumbs/foxcycle.png')
    },
    {
        title: 'Fridge With Friends',
        body: 'My final project for Mobile App Development. An Android app which helps to collaboratively arrange fridge magnets.',
        thumb: require('./thumbs/android.svg')
    },
    {
        title: 'Temple Run Converter',
        body: 'A converter for the proprietary 3D model format used by the mobile game Temple Run.',
        url: 'https://github.com/cvirostek/BKSB-Converter',
        thumb: require('./thumbs/templerun.png')
    }
];

export default cards;