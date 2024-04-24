import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export interface CustomTextFieldProps {
    label: string;
}

const BasicTextField: React.FC<CustomTextFieldProps> = ({ label }) => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label={label} variant="outlined" />
        </Box>
    );
}

export default BasicTextField;