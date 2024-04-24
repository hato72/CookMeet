import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Person from '@mui/icons-material/Person';
import { Person2Rounded, Person3 } from '@mui/icons-material';

export default function SettingsAccountBar() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<Person />} style={{ color: 'black', borderColor: 'black' }} sx={{
                '&:hover': { // カーソルがボタンに合わされたときのスタイルを指定
                    backgroundColor: 'gray', // ボタンの背景色を変更
                },
            }}>
                アカウント設定
            </Button>
        </Stack>
    );
}