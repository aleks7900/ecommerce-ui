import { apiClient } from "../../api/apiClient";
import type {LoginRequest, LoginResponse, RegisterRequest, RegisterResponse} from "../types.ts";

export async function login(
    request: LoginRequest
): Promise<LoginResponse> {

    const response =
        await apiClient.post<LoginResponse>(
            "/api/auth/login",
            request
        );

    return response.data;
}

export async function register(
    request: RegisterRequest
): Promise<RegisterResponse> {

    const response =
        await apiClient.post<RegisterResponse>(
            "/api/auth/register",
            request
        );

    return response.data;
}

export function useAuth() {

    const token =
        localStorage.getItem(
            "token"
        );

    return {

        isAuthenticated:
            !!token,

        token
    };
}