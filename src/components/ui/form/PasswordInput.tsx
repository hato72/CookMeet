'use client';

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import React, { useState } from "react"

type PasswordInputProps = {
    label?: string;
    helperText: string;
    placeholder: string;
    value: string;
    error: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label = "パスワード", helperText, placeholder, value, error, onChange }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    
    return (
        <TextField
        label={label}
        helperText={error ? helperText : ''}
        placeholder={placeholder}
        error={error}
        value={value}
        type={showPassword ? 'text' : 'password'}
        onChange={onChange}
        fullWidth
        InputProps={{
            endAdornment: (
                <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={e => e.preventDefault()}
                onMouseUp={e => e.preventDefault()}
                edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            )
        }}
        />
    );
};

export default PasswordInput;