import Box, { type BoxProps } from '@mui/material/Box';
import type { ReactNode } from 'react';
import React from 'react';

interface Props extends BoxProps {
    children: ReactNode;
}
export default function Flex({ children, ...props }: Props) {
    return (
        <Box display="flex" {...props}>
            {children}
        </Box>
    );
}
