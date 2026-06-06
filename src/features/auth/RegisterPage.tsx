import {
    Button,
    Card,
    CardContent,
    Container,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import { useState } from "react";

import { register } from "./authApi";

import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const navigate = useNavigate();

    const [firstName, setFirstName] =
        useState("");

    const [lastName, setLastName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    async function handleRegister() {

        try {

            setLoading(true);

            await register({
                firstName,
                lastName,
                email,
                password
            });

            alert(
                "Registration successful"
            );

            navigate("/login");

        } catch {

            alert(
                "Registration failed"
            );

        } finally {

            setLoading(false);
        }
    }

    return (

        <Container
            maxWidth="sm"
            sx={{
                mt: 8
            }}
        >

            <Card>

                <CardContent>

                    <Typography
                        variant="h4"
                        gutterBottom
                    >
                        Register
                    </Typography>

                    <Stack spacing={2}>

                        <TextField
                            label="First Name"
                            value={firstName}
                            onChange={(e) =>
                                setFirstName(
                                    e.target.value
                                )
                            }
                        />

                        <TextField
                            label="Last Name"
                            value={lastName}
                            onChange={(e) =>
                                setLastName(
                                    e.target.value
                                )
                            }
                        />

                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                        />

                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                        />

                        <Button
                            variant="contained"
                            onClick={handleRegister}
                            disabled={loading}
                        >
                            Register
                        </Button>

                    </Stack>

                </CardContent>

            </Card>

        </Container>
    );
}