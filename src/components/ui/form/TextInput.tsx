import { TextField } from "@mui/material";
import React from "react";

type TextInputProps = {
    label: string;
    type?: React.HTMLInputTypeAttribute
    helperText: string;
    placeholder: string;
    value: string;
    error: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * ### メールアドレスやパスワードの入力フォームを提供するコンポーネント
 * 
 * @param label フォームのラベル
 * @param helperText バリデーションエラー時のメッセージ
 * @param type (optional) フォームのタイプ(デフォルトは'text')
 * @param placeholder フォームのプレースホルダー
 * @param value フォームの値
 * @param error バリデーションエラーの有無
 * @param onChange フォームの値が変更された時のコールバック
 */
const TextInput: React.FC<TextInputProps> = ({ label, helperText, placeholder, value, type = 'text', error, onChange }) => {
    return (
        <TextField
        variant="outlined"
        label={label}
        helperText={error ? helperText : ''}
        error={error}
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        fullWidth
        />
    );
};

export default TextInput;