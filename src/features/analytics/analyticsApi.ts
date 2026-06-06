import { apiClient } from "../../api/apiClient.ts";

export async function getDashboardMetrics() {

    const response =
        await apiClient.get(
            "/api/analytics/dashboard"
        );

    return response.data;
}

export async function getRevenueTrend() {

    const response =
        await apiClient.get(
            "/api/analytics/revenue"
        );

    return response.data;
}