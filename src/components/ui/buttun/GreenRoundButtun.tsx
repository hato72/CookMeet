import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const GreenRoundButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
    return (
        <Button
            variant="contained"
            color="success"
            sx={{
                borderRadius: '20px', // 丸みの程度を適宜調整
                fontSize: '1.2rem',
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default GreenRoundButton;
