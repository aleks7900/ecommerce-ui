import { apiClient } from "../../api/apiClient";
import type {
    CreateOrderRequest,
    Order
} from ".././types";

export async function createOrder(
    request: CreateOrderRequest
): Promise<Order> {

    const response =
        await apiClient.post<Order>(
            "/api/orders",
            request
        );

    return response.data;
}

export async function getOrders(): Promise<Order[]> {

    const response =
        await apiClient.get<Order[]>(
            "/api/orders"
        );

    return response.data;
}