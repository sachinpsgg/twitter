import { clsx } from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: ReactNode;
}
export default function ScrollableContainer({
                                                className,
                                                children,
                                                ...props
                                            }: Props) {
    return (
        <div
            className={clsx(`h-screen relative`, className)}
            {...props}
        >
            {children}
        </div>
    );
}
