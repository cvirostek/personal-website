import React from 'react';

interface HttpErrorProps {
    code: number,
    message: string
}

const HttpError: React.FC<HttpErrorProps> = (props) => {
    return (
        <div>
            <h1>{props.code} Error</h1>
            <p>{props.message}</p>
        </div>
    );
}

export default HttpError;

