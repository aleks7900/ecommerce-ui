import {
    Badge,
    IconButton,
    Menu,
    MenuItem
} from "@mui/material";

import NotificationsIcon
    from "@mui/icons-material/Notifications";

import {
    useEffect,
    useState
} from "react";

import {
    Client
} from "@stomp/stompjs";

export default function NotificationBell() {

    const [notifications, setNotifications] =
        useState<string[]>([]);

    const [anchorEl, setAnchorEl] =
        useState<null | HTMLElement>(null);

    useEffect(() => {

        const client =
            new Client({

                brokerURL:
                    "ws://localhost:8088/ws"
            });

        client.onConnect =
            () => {

                client.subscribe(

                    "/topic/notifications",

                    message => {

                        setNotifications(
                            current => [

                                message.body,

                                ...current
                            ]
                        );
                    }
                );
            };

        client.activate();

        return () => {

            client.deactivate();
        };

    }, []);

    return (

        <>

            <IconButton
                color="inherit"
                onClick={(e) =>
                    setAnchorEl(
                        e.currentTarget
                    )
                }
            >

                <Badge
                    badgeContent={
                        notifications.length
                    }
                    color="error"
                >

                    <NotificationsIcon />

                </Badge>

            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() =>
                    setAnchorEl(null)
                }
            >

                {
                    notifications.length === 0

                        ? (

                            <MenuItem>

                                No notifications

                            </MenuItem>
                        )

                        : (

                            notifications.map(

                                (notification, index) => (

                                    <MenuItem
                                        key={index}
                                    >

                                        {notification}

                                    </MenuItem>
                                )
                            )
                        )
                }

            </Menu>

        </>
    );
}