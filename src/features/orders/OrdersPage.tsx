import {
    Card,
    CardContent,
    Chip,
    CircularProgress,
    Container,
    Stack,
    Typography
} from "@mui/material";

import { useEffect } from "react";

import {
    useQuery,
    useQueryClient
} from "@tanstack/react-query";

import {
    getOrders
} from "./orderApi";

import type {
    Order
} from "../types";

import {
    connectOrderSocket
} from "../../websocket/orderSocket";

export default function OrdersPage() {

    const queryClient =
        useQueryClient();

    const {
        data: orders = [],
        isLoading,
        isError
    } = useQuery({

        queryKey: ["orders"],

        queryFn: getOrders
    });

    useEffect(() => {

        const client =
            connectOrderSocket(
                orderUpdate => {

                    queryClient.setQueryData<Order[]>(

                        ["orders"],

                        current => {

                            if (!current) {
                                return [];
                            }

                            return current.map(
                                order =>

                                    order.id ===
                                    orderUpdate.orderId

                                        ? {
                                            ...order,
                                            status:
                                            orderUpdate.status
                                        }

                                        : order
                            );
                        }
                    );
                }
            );

        return () => {

            client.deactivate();
        };

    }, [queryClient]);

    if (isLoading) {

        return (

            <Container sx={{ mt: 4 }}>

                <CircularProgress />

            </Container>
        );
    }

    if (isError) {

        return (

            <Container sx={{ mt: 4 }}>

                <Typography>

                    Failed to load orders

                </Typography>

            </Container>
        );
    }

    return (

        <Container sx={{ mt: 4 }}>

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
                                Product: {order.productId}
                            </Typography>

                            <Typography>
                                Quantity: {order.quantity}
                            </Typography>

                            <Typography>
                                Price: ${order.totalPrice}
                            </Typography>

                            <Chip
                                sx={{ mt: 1 }}
                                label={order.status}
                            />

                        </CardContent>

                    </Card>

                ))}

            </Stack>

        </Container>
    );
}