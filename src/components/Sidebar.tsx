import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";

import DashboardIcon
    from "@mui/icons-material/Dashboard";

import InventoryIcon
    from "@mui/icons-material/Inventory";

import ShoppingCartIcon
    from "@mui/icons-material/ShoppingCart";

import AnalyticsIcon
    from "@mui/icons-material/Analytics";

import PersonIcon
    from "@mui/icons-material/Person";

import LogoutIcon
    from "@mui/icons-material/Logout";

import {
    useNavigate
} from "react-router-dom";

import {
    useDispatch
} from "react-redux";

import {
    logout
} from "../features/auth/authSlice";

const drawerWidth = 240;

export default function Sidebar() {

    const navigate =
        useNavigate();

    const dispatch =
        useDispatch();

    const handleLogout = () => {

        dispatch(
            logout()
        );

        navigate(
            "/login"
        );
    };

    return (

        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,

                flexShrink: 0,

                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box"
                }
            }}
        >

            <Toolbar />

            <List>

                <ListItemButton
                    onClick={() =>
                        navigate("/")
                    }
                >

                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>

                    <ListItemText
                        primary="Dashboard"
                    />

                </ListItemButton>

                <ListItemButton
                    onClick={() =>
                        navigate(
                            "/products"
                        )
                    }
                >

                    <ListItemIcon>
                        <InventoryIcon />
                    </ListItemIcon>

                    <ListItemText
                        primary="Products"
                    />

                </ListItemButton>

                <ListItemButton
                    onClick={() =>
                        navigate(
                            "/orders"
                        )
                    }
                >

                    <ListItemIcon>
                        <ShoppingCartIcon />
                    </ListItemIcon>

                    <ListItemText
                        primary="Orders"
                    />

                </ListItemButton>

                <ListItemButton
                    onClick={() =>
                        navigate(
                            "/analytics"
                        )
                    }
                >

                    <ListItemIcon>
                        <AnalyticsIcon />
                    </ListItemIcon>

                    <ListItemText
                        primary="Analytics"
                    />

                </ListItemButton>

                <ListItemButton
                    onClick={() =>
                        navigate(
                            "/profile"
                        )
                    }
                >

                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>

                    <ListItemText
                        primary="Profile"
                    />

                </ListItemButton>

                <ListItemButton
                    onClick={
                        handleLogout
                    }
                >

                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>

                    <ListItemText
                        primary="Logout"
                    />

                </ListItemButton>

            </List>

        </Drawer>
    );
}