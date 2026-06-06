import {
    Card,
    CardContent,
    Grid,
    Typography
} from "@mui/material";

export default function DashboardPage() {

    return (

        <>

            <Typography
                variant="h4"
                gutterBottom
            >
                Dashboard
            </Typography>

            <Grid
                container
                spacing={3}
            >

                <Grid size={{ xs: 12, md: 3 }}>

                    <Card>

                        <CardContent>

                            <Typography>

                                Orders

                            </Typography>

                            <Typography
                                variant="h4"
                            >
                                154
                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>

                    <Card>

                        <CardContent>

                            <Typography>

                                Revenue

                            </Typography>

                            <Typography
                                variant="h4"
                            >
                                $12,450
                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>

                    <Card>

                        <CardContent>

                            <Typography>

                                Products

                            </Typography>

                            <Typography
                                variant="h4"
                            >
                                68
                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid size={{ xs: 12, md: 3 }}>

                    <Card>

                        <CardContent>

                            <Typography>

                                Customers

                            </Typography>

                            <Typography
                                variant="h4"
                            >
                                520
                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

        </>
    );
}