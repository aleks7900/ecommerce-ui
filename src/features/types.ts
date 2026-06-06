export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface RegisterResponse {
    userId: string;
    email: string;
}

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    sellerId: string;
}

export interface CreateOrderRequest {
    productId: string;
    quantity: number;
}

export interface Order {
    id: string;
    productId: string;
    buyerId: string;
    quantity: number;
    totalPrice: number;
    status: string;
    createdAt: string;
}

export interface OrderStatusMessage {
    orderId: string;
    status: string;
}