import React from 'react';

import HttpError from './HttpError';

const NotImplemented: React.FC = () => {
    return (
        <HttpError code={501} message='not implemented'/>
    );
}

export default NotImplemented;

