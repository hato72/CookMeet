import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface TextProps {
    text: string;
}

const CheckboxLabel: React.FC<TextProps> = ({ text }) => {
    return (
        <FormControlLabel
            control={<Checkbox />}
            label={text}
            style={{ color: 'black' }} // 文字の色を黒に設定
        />
    );
}

export default CheckboxLabel;
