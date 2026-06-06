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

import { login } from "./authApi";

import { useDispatch } from "react-redux";

import { loginSuccess }
    from "./authSlice";
import {Link, useNavigate} from "react-router-dom";

export default function LoginPage() {

    const dispatch =
        useDispatch();

    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [loading, setLoading] =
        useState(false);

    async function handleLogin() {

        try {

            setLoading(true);

            const response =
                await login({
                    email,
                    password
                });

            dispatch(
                loginSuccess(
                    response.accessToken
                )
            );

            navigate("/products");

        } catch {

            alert(
                "Invalid credentials"
            );

        } finally {

            setLoading(false);
        }
    }

    return (

        <Container
            maxWidth="sm"
            sx={{
                mt: 10
            }}
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
                            disabled={loading}
                        >
                            Login
                        </Button>

                        <Typography>

                            Don't have an account?

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