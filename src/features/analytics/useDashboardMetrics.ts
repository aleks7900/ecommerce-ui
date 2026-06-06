import {
    useQuery
} from "@tanstack/react-query";

import {
    getDashboardMetrics
} from "./analyticsApi";

export function useDashboardMetrics() {

    return useQuery({

        queryKey: ["dashboard"],

        queryFn:
        getDashboardMetrics
    });
}