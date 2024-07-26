import type { ButtonGroupProps } from '@mui/material/ButtonGroup';
import MuiButtonGroup from '@mui/material/ButtonGroup';
import React from 'react';

type Props = Pick<
    ButtonGroupProps,
    | 'className'
    | 'orientation'
    | 'size'
    | 'onClick'
    | 'variant'
    | 'sx'
    | 'children'
>;

export default function ButtonGroup({ children, ...props }: Props) {
    return <MuiButtonGroup {...props}>{children}</MuiButtonGroup>;
}
