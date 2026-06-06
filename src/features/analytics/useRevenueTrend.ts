import {
    useQuery
} from "@tanstack/react-query";

import {
    getRevenueTrend
} from "./analyticsApi";

export function useRevenueTrend() {

    return useQuery({

        queryKey: ["revenue"],

        queryFn:
        getRevenueTrend
    });
}