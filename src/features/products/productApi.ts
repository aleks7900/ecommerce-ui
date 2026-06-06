import { apiClient } from "../../api/apiClient";

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

export interface Product {

    id: string;

    name: string;

    description: string;

    price: number;
}

export interface CreateProductRequest {

    name: string;

    description: string;

    price: number;
}

export const createProduct = async (
    product: CreateProductRequest
): Promise<Product> => {

    const response =
        await apiClient.post<Product>(
            "/api/products",
            product
        );

    return response.data;
};