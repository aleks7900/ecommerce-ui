import {
    Alert,
    Button,
    Card,
    CardContent,
    Container,
    Stack,
    TextField,
    Typography
} from "@mui/material";

import { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import { register } from "./authApi";

import { useNavigate } from "react-router-dom";
import type {AxiosError} from "axios";

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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [errorMessage, setErrorMessage] =
        useState("");

    const registerMutation =
        useMutation({

            mutationFn: register,

            onSuccess: () => {

                setErrorMessage("");

                navigate("/login");
            },

            onError: (error: AxiosError<{ message: string }>) => {

                setErrorMessage(
                    error.response?.data?.message
                    ?? "Registration failed"
                );
            }
        });

    const handleRegister = () => {

        registerMutation.mutate({
            firstName,
            lastName,
            email,
            password
        });
    };

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

                        {
                            errorMessage && (

                                <Alert severity="error">

                                    {errorMessage}

                                </Alert>
                            )
                        }
                        {
                            registerMutation.isSuccess && (

                                <Alert severity="success">

                                    Registration successful

                                </Alert>
                            )
                        }

                        <Button
                            variant="contained"
                            onClick={handleRegister}
                            disabled={
                                registerMutation.isPending
                            }
                        >
                            {
                                registerMutation.isPending
                                    ? "Registering..."
                                    : "Register"
                            }
                        </Button>

                    </Stack>

                </CardContent>

            </Card>

        </Container>
    );
}