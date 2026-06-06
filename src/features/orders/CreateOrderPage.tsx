import {
    Alert,
    Button,
    Card,
    CardContent,
    Container,
    TextField,
    Typography
} from "@mui/material";

import { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    createOrder
} from "./orderApi";
import type {CreateOrderRequest, Order} from "../types.ts";
import type {AxiosError} from "axios";

export default function CreateOrderPage() {

    const { productId } =
        useParams();

    const navigate =
        useNavigate();

    const [quantity, setQuantity] =
        useState(1);

    const createOrderMutation = useMutation<
        Order,
        AxiosError<{ message: string }>,
        CreateOrderRequest
    >({
        mutationFn: createOrder,

        onSuccess: () => {
            navigate("/orders");
        }
    });

    const handleCreateOrder = () => {

        if (!productId) {
            return;
        }

        createOrderMutation.mutate({
            productId,
            quantity
        });
    };

    return (

        <Container
            maxWidth="sm"
            sx={{ mt: 5 }}
        >

            <Card>

                <CardContent>

                    <Typography
                        variant="h4"
                        gutterBottom
                    >
                        Create Order
                    </Typography>

                    <TextField
                        fullWidth
                        type="number"
                        label="Quantity"
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(
                                Number(
                                    e.target.value
                                )
                            )
                        }
                    />

                    {
                        createOrderMutation.isError && (

                            <Alert severity="error">

                                {
                                    createOrderMutation.error
                                        ?.response
                                        ?.data
                                        ?.message
                                    ?? "Failed to create order"
                                }

                            </Alert>
                        )
                    }

                    <Button
                        sx={{ mt: 3 }}
                        variant="contained"
                        onClick={handleCreateOrder}
                        disabled={
                            createOrderMutation.isPending
                        }
                    >
                        {
                            createOrderMutation.isPending
                                ? "Creating..."
                                : "Place Order"
                        }
                    </Button>

                </CardContent>

            </Card>

        </Container>
    );
}