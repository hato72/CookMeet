import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const GreenQuadButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
    return (
        <Button variant="contained" color="success" {...props}>
            {children}
        </Button>
    );
};

export default GreenQuadButton;
