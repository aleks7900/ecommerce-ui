import {
    Alert,
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import {
    useState
} from "react";

import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";
import {changePassword, updateProfile} from "../features/profile/profileApi.ts";
import {useCurrentUser} from "../features/profile/useCurrentUser.ts";

export default function ProfilePage() {

    const queryClient =
        useQueryClient();

    const {
        data: user,
        isLoading,
        isError
    } = useCurrentUser();

    const [editOpen, setEditOpen] =
        useState(false);

    const [passwordOpen, setPasswordOpen] =
        useState(false);

    const [firstName, setFirstName] =
        useState("");

    const [lastName, setLastName] =
        useState("");

    const [avatarUrl, setAvatarUrl] =
        useState("");

    const [currentPassword, setCurrentPassword] =
        useState("");

    const [newPassword, setNewPassword] =
        useState("");

    const updateProfileMutation =
        useMutation({

            mutationFn:
            updateProfile,

            onSuccess: () => {

                queryClient.invalidateQueries({

                    queryKey: [
                        "current-user"
                    ]
                });

                setEditOpen(
                    false
                );
            }
        });

    const changePasswordMutation =
        useMutation({

            mutationFn:
            changePassword,

            onSuccess: () => {

                setPasswordOpen(
                    false
                );

                setCurrentPassword(
                    ""
                );

                setNewPassword(
                    ""
                );
            }
        });

    if (isLoading) {

        return (

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5
                }}
            >

                <CircularProgress />

            </Box>
        );
    }

    if (isError || !user) {

        return (

            <Alert severity="error">

                Failed to load profile

            </Alert>
        );
    }

    return (

        <Stack spacing={3}>

            <Card>

                <CardContent>

                    <Stack
                        spacing={2}
                        sx={{
                            alignItems: "center"
                        }}
                    >

                        <Avatar
                            src={user.avatarUrl}
                            sx={{
                                width: 120,
                                height: 120
                            }}
                        />

                        <Typography
                            variant="h4"
                        >
                            {user.firstName}
                            {" "}
                            {user.lastName}
                        </Typography>

                        <Typography>

                            {user.email}

                        </Typography>

                        <Stack
                            direction="row"
                            spacing={1}
                        >

                            {user.roles.map(
                                (role: string) => (
                                    <Chip
                                        key={role}
                                        label={role}
                                    />
                                )
                            )}

                        </Stack>

                        <Typography>

                            Registered:

                            {" "}

                            {
                                new Date(
                                    user.createdAt
                                ).toLocaleDateString()
                            }

                        </Typography>

                        <Typography>

                            Last Login:

                            {" "}

                            {
                                new Date(
                                    user.lastLogin
                                ).toLocaleString()
                            }

                        </Typography>

                    </Stack>

                </CardContent>

            </Card>

            <Grid
                container
                spacing={2}
            >

                <Grid
                    size={{
                        xs: 12,
                        md: 6
                    }}
                >

                    <Card>

                        <CardContent>

                            <Typography>

                                Orders Count

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {user.ordersCount}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid
                    size={{
                        xs: 12,
                        md: 6
                    }}
                >

                    <Card>

                        <CardContent>

                            <Typography>

                                Total Spent

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                $
                                {user.totalSpent}

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

            <Stack
                direction="row"
                spacing={2}
            >

                <Button
                    variant="contained"
                    onClick={() => {

                        setFirstName(
                            user.firstName
                        );

                        setLastName(
                            user.lastName
                        );

                        setAvatarUrl(
                            user.avatarUrl
                        );

                        setEditOpen(
                            true
                        );
                    }}
                >
                    Edit Profile
                </Button>

                <Button
                    variant="outlined"
                    onClick={() =>
                        setPasswordOpen(
                            true
                        )
                    }
                >
                    Change Password
                </Button>

            </Stack>

            <Dialog
                open={editOpen}
                onClose={() =>
                    setEditOpen(
                        false
                    )
                }
            >

                <DialogTitle>

                    Edit Profile

                </DialogTitle>

                <DialogContent>

                    <Stack
                        spacing={2}
                        sx={{
                            mt: 1,
                            minWidth: 400
                        }}
                    >

                        <TextField
                            label="First Name"
                            value={firstName}
                            onChange={e =>
                                setFirstName(
                                    e.target.value
                                )
                            }
                        />

                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={e =>
                                setLastName(
                                    e.target.value
                                )
                            }
                        />

                        <TextField
                            label="Avatar URL"
                            value={avatarUrl}
                            onChange={e =>
                                setAvatarUrl(
                                    e.target.value
                                )
                            }
                        />

                    </Stack>

                </DialogContent>

                <DialogActions>

                    <Button
                        onClick={() =>
                            setEditOpen(
                                false
                            )
                        }
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        disabled={
                            updateProfileMutation.isPending
                        }
                        onClick={() =>

                            updateProfileMutation.mutate({

                                firstName,

                                lastName,

                                avatarUrl
                            })
                        }
                    >
                        Save
                    </Button>

                </DialogActions>

            </Dialog>

            <Dialog
                open={passwordOpen}
                onClose={() =>
                    setPasswordOpen(
                        false
                    )
                }
            >

                <DialogTitle>

                    Change Password

                </DialogTitle>

                <DialogContent>

                    <Stack
                        spacing={2}
                        sx={{
                            mt: 1,
                            minWidth: 400
                        }}
                    >

                        <TextField
                            type="password"
                            label="Current Password"
                            value={currentPassword}
                            onChange={e =>
                                setCurrentPassword(
                                    e.target.value
                                )
                            }
                        />

                        <TextField
                            type="password"
                            label="New Password"
                            value={newPassword}
                            onChange={e =>
                                setNewPassword(
                                    e.target.value
                                )
                            }
                        />

                    </Stack>

                </DialogContent>

                <DialogActions>

                    <Button
                        onClick={() =>
                            setPasswordOpen(
                                false
                            )
                        }
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        disabled={
                            changePasswordMutation.isPending
                        }
                        onClick={() =>

                            changePasswordMutation.mutate({

                                currentPassword,

                                newPassword
                            })
                        }
                    >
                        Change
                    </Button>

                </DialogActions>

            </Dialog>

        </Stack>
    );
}