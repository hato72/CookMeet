"use client"

import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import CheckboxLabel from './CheckboxLabel'; // CheckboxLabel コンポーネントをインポート
import { Typography } from '@mui/material';

export default function CheckList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <Typography variant="h6" component="div" color="textPrimary">
                        材料
                    </Typography>
                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleClick}>
                {/* CheckboxLabel コンポーネントを使用して各材料を表に表示 */}
                <CheckboxLabel text="Ingredient 1" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <CheckboxLabel text="Ingredient 2" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <CheckboxLabel text="Ingredient 3" />
            </ListItemButton>
        </List>
    );
}
