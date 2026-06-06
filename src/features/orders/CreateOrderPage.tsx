import {
    Button,
    Card,
    CardContent,
    Container,
    TextField,
    Typography
} from "@mui/material";

import { useState } from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    createOrder
} from "./orderApi";

export default function CreateOrderPage() {

    const { productId } =
        useParams();

    const navigate =
        useNavigate();

    const [quantity, setQuantity] =
        useState(1);

    async function handleCreateOrder() {

        if (!productId) {
            return;
        }

        await createOrder({
            productId,
            quantity
        });

        navigate("/orders");
    }

    return (

        <Container maxWidth="sm" sx={{ mt: 5 }}>

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

                    <Button
                        sx={{ mt: 3 }}
                        variant="contained"
                        onClick={handleCreateOrder}
                    >
                        Place Order
                    </Button>

                </CardContent>

            </Card>

        </Container>
    );
}