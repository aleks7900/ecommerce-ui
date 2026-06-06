import {useRevenueTrend} from "../features/analytics/useRevenueTrend.ts";


export default function AnalyticsPage() {

    const {
        data = [],
        isLoading
    } = useRevenueTrend();

    if (isLoading) {

        return <>Loading...</>;
    }

    console.log(data);

    return (

        <div>

            Revenue Analytics

        </div>
    );
}