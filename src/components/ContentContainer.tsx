import React from 'react';
import { clsx } from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}

const ContentContainer: React.FC<Props> = ({ className, children, ...props }) => {
    return(
        <div
            className={clsx('pt-12 pb-8 px-8 overflow-y-auto', className)}
    {...props}
>
    {children}
    </div>
    );
};

export default ContentContainer;
