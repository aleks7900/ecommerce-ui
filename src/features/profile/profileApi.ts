import {
    apiClient
} from "../../api/apiClient";

export async function getCurrentUser() {

    const response =
        await apiClient.get(
            "/api/auth/me"
        );

    return response.data;
}

export async function updateProfile(request: {
    firstName: string;
    lastName: string;
    avatarUrl: string;
}) {

    return apiClient.put(
        "/api/auth/me",
        request
    );
}

export async function changePassword(request: {
    currentPassword: string;
    newPassword: string;
}) {

    return apiClient.post(
        "/api/auth/change-password",
        request
    );
}