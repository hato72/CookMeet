import React from 'react';
import { Button, ButtonProps } from '@mui/material';
import { Email, Share, ShareLocationRounded } from '@mui/icons-material';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const SocialMediaButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
    return (
        <Button
            variant="contained"
            startIcon={<Share />}
            sx={{
                color: "black",
                backgroundColor: "white",
                borderRadius: '20px', // 丸みの程度を適宜調整
                '&:hover': { // カーソルがボタンに合わされたときのスタイルを指定
                    backgroundColor: 'gray', // ボタンの背景色を変更
                },
                fontSize: '1.2rem',
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default SocialMediaButton;
