import { apiClient } from "../../api/apiClient";
import type {Product} from "../types.ts";

export async function getProducts(): Promise<Product[]> {

    const response =
        await apiClient.get<Product[]>(
            "/api/products"
        );

    return response.data;
}

export async function getProduct(
    productId: string
): Promise<Product> {

    const response =
        await apiClient.get<Product>(
            `/api/products/${productId}`
        );

    return response.data;
}