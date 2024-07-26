import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

interface Props {
    className?: string;
    size?: number;
    progress?: number;
}

export default function Spinner({
                                    className,
                                    progress = -1,
                                    size = 14,
                                }: Props) {
    const hasProgress = progress !== -1;

    return (
        <div className="relative inline-flex h-fit">
            <CircularProgress
                className={className}
                color="secondary"
                size={size}
                value={progress}
                variant={hasProgress ? 'determinate' : 'indeterminate'}
            />
        </div>
    );
}
