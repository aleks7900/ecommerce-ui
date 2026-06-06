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

import { useMutation } from "@tanstack/react-query";

import { login } from "./authApi";

import { useDispatch } from "react-redux";

import { loginSuccess } from "./authSlice";

import {
    Link,
    useNavigate
} from "react-router-dom";

export default function LoginPage() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const loginMutation =
        useMutation({

            mutationFn: login,

            onSuccess: (response) => {

                dispatch(
                    loginSuccess(
                        response.accessToken
                    )
                );

                navigate(
                    "/products"
                );
            },

            onError: () => {

                alert(
                    "Invalid credentials"
                );
            }
        });

    const handleLogin = () => {

        loginMutation.mutate({
            email,
            password
        });
    };

    return (

        <Container
            maxWidth="sm"
            sx={{ mt: 10 }}
        >

            <Card>

                <CardContent>

                    <Typography
                        variant="h4"
                        gutterBottom
                    >
                        Login
                    </Typography>

                    <Stack spacing={2}>

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
                            onClick={handleLogin}
                            disabled={
                                loginMutation.isPending
                            }
                        >
                            {
                                loginMutation.isPending
                                    ? "Signing in..."
                                    : "Login"
                            }
                        </Button>

                        <Typography>

                            Don't have an account?{" "}

                            <Link to="/register">
                                Register
                            </Link>

                        </Typography>

                    </Stack>

                </CardContent>

            </Card>

        </Container>
    );
}