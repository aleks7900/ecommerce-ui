import {
    Box,
    Toolbar
} from "@mui/material";

import {
    Outlet
} from "react-router-dom";

import Header
    from "../components/Header";

import Sidebar
    from "../components/Sidebar";

import Footer
    from "../components/Footer";

const drawerWidth = 240;

export default function AppLayout() {

    return (

        <Box
            sx={{
                display: "flex"
            }}
        >

            <Header />

            <Sidebar />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    ml: `${drawerWidth}px`,
                    minHeight:
                        "100vh",
                    display: "flex",
                    flexDirection:
                        "column"
                }}
            >

                <Toolbar />

                <Box
                    sx={{
                        flexGrow: 1
                    }}
                >

                    <Outlet />

                </Box>

                <Footer />

            </Box>

        </Box>
    );
}