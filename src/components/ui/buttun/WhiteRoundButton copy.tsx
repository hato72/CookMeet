import React from 'react';
import { Button, ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
    children: React.ReactNode;
}

const WhiteRoundButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
    return (
        <Button
            variant="contained"
            sx={{
                borderRadius: '48px', // 丸みの程度を適宜調整
                color: "black",
                backgroundColor: "white",
                '&:hover': { // カーソルがボタンに合わされたときのスタイルを指定
                    backgroundColor: 'gray', // ボタンの背景色を変更
                },
                fontSize: '2.0rem', // 文字のサイズを1.2remに設定
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default WhiteRoundButton;
