import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { SetMeal } from '@mui/icons-material';

function SettingsHistoryBar() {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<SetMeal />} style={{ color: 'black', borderColor: 'black' }} sx={{
                '&:hover': { // カーソルがボタンに合わされたときのスタイルを指定
                    backgroundColor: 'gray', // ボタンの背景色を変更
                },
            }}>
                調理履歴
            </Button>
        </Stack>
    );
}

export default SettingsHistoryBar;