import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const WhiteQuadButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
    return (
        <Button variant="outlined" {...props} style={{ color: 'green', borderColor: 'green' }}>
            {children}
        </Button>
    );
};

export default WhiteQuadButton;
