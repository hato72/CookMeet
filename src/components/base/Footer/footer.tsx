import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
    return (
        <AppBar component="footer" position="fixed" sx={{ top: 'auto', bottom: 0, backgroundColor: '#000000' }}>
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="caption" color="white">
                        ©2024 CookMeet
                    </Typography>
                </Box>
            </Container>
        </AppBar>
    );
};

export default Footer;