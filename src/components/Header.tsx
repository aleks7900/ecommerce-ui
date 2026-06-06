import {
    AppBar,
    Toolbar,
    Typography,
    Button
} from "@mui/material";

import {
    useDispatch
} from "react-redux";

import {
    useNavigate
} from "react-router-dom";

import {
    logout
} from "../features/auth/authSlice";
import NotificationBell from "./NotificationBell.tsx";

export default function Header() {

    const dispatch =
        useDispatch();

    const navigate =
        useNavigate();

    const handleLogout = () => {

        dispatch(
            logout()
        );

        navigate(
            "/login"
        );
    };

    return (

        <AppBar
            position="fixed"
        >

            <Toolbar>

                <Typography
                    variant="h6"
                    sx={{
                        flexGrow: 1
                    }}
                >
                    Ecommerce Platform
                </Typography>

                <NotificationBell />
                <Button
                    color="inherit"
                    onClick={handleLogout}
                >
                    Logout
                </Button>

            </Toolbar>

        </AppBar>
    );
}