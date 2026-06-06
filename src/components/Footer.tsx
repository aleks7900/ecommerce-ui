import {
    Box,
    Typography
} from "@mui/material";

export default function Footer() {

    return (

        <Box
            sx={{
                mt: 4,
                py: 2,
                borderTop:
                    "1px solid #ddd",
                textAlign:
                    "center"
            }}
        >

            <Typography
                variant="body2"
            >
                Ecommerce Platform © 2026
            </Typography>

        </Box>
    );
}