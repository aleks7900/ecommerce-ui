import {
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";
import {useDashboardMetrics} from "../features/analytics/useDashboardMetrics.ts";

export default function DashboardPage() {

    const {
        data,
        isLoading
    } = useDashboardMetrics();

    if (isLoading) {

        return <>Loading...</>;
    }

    return (

        <Grid
            container
            spacing={3}
        >

            <Grid size={{ xs: 12, md: 4 }}>

                <Card>

                    <CardContent>

                        <Typography>
                            Orders
                        </Typography>

                        <Typography variant="h4">
                            {data?.totalOrders ?? 0}
                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>

                <Card>

                    <CardContent>

                        <Typography>
                            Revenue
                        </Typography>

                        <Typography variant="h4">
                            ${data?.totalRevenue ?? 0}
                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>

                <Card>

                    <CardContent>

                        <Typography>
                            Customers
                        </Typography>

                        <Typography variant="h4">
                            {data?.totalCustomers ?? 0}
                        </Typography>

                    </CardContent>

                </Card>

            </Grid>

        </Grid>
    );
}