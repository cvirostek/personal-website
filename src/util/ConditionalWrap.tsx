import React from 'react';

interface IProps {
    condition: boolean,
    wrap: (children: React.ReactNode) => React.ReactNode
}

const ConditionalWrap: React.FC<IProps> = ({condition, wrap, children}) => {
    return (
        <React.Fragment>
            {condition ? wrap(children) : children}
        </React.Fragment>
    );
}

export default ConditionalWrap;