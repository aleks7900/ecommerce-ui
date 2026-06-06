import {Card, CardContent, Chip, Container, Stack, Typography} from "@mui/material";

import {useEffect, useState} from "react";

import {getOrders} from "./orderApi";
import type {Order} from "../types.ts";
import {connectOrderSocket} from "../../websocket/orderSocket.ts";

export default function OrdersPage() {

    const [orders, setOrders] =
        useState<Order[]>([]);

    useEffect(() => {

        (async () => {

            const data =
                await getOrders();

            setOrders(data);

        })();

        const client =
            connectOrderSocket(
                orderUpdate => {

                    setOrders(current =>
                        current.map(order =>
                            order.id === orderUpdate.orderId
                                ? {
                                    ...order,
                                    status: orderUpdate.status
                                }
                                : order
                        )
                    );
                }
            );

        return () => {
            client.deactivate();
        };

    }, []);

    return (

        <Container sx={{mt: 4}}>

            <Typography
                variant="h4"
                gutterBottom
            >
                My Orders
            </Typography>

            <Stack spacing={2}>

                {orders.map(order => (

                    <Card key={order.id}>

                        <CardContent>

                            <Typography>
                                Order: {order.id}
                            </Typography>

                            <Typography>
                                Product:
                                {" "}
                                {order.productId}
                            </Typography>

                            <Typography>
                                Quantity:
                                {" "}
                                {order.quantity}
                            </Typography>

                            <Typography>
                                Price:
                                {" "}
                                ${order.totalPrice}
                            </Typography>

                            <Chip
                                sx={{mt: 1}}
                                label={order.status}
                            />

                        </CardContent>

                    </Card>

                ))}

            </Stack>

        </Container>
    );
}