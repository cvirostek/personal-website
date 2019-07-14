import React from 'react';

import HttpError from './HttpError';

const NotFound: React.FC = () => {
    return (
        <HttpError code={404} message='not found'/>
    );
}

export default NotFound;

