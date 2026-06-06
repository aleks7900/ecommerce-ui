import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@mui/material";

import {
    useQuery
} from "@tanstack/react-query";

import {
    useNavigate
} from "react-router-dom";

import {
    getProducts
} from "./productApi";

export default function ProductsPage() {

    const navigate =
        useNavigate();

    const {
        data: products = [],
        isLoading,
        isError
    } = useQuery({

        queryKey: [
            "products"
        ],

        queryFn:
        getProducts
    });

    if (isLoading) {

        return (

            <Container sx={{ mt: 5 }}>

                <CircularProgress />

            </Container>
        );
    }

    if (isError) {

        return (

            <Container sx={{ mt: 5 }}>

                <Typography>

                    Failed to load products

                </Typography>

            </Container>
        );
    }

    return (

        <Container sx={{ mt: 4 }}>

            <Typography
                variant="h4"
                gutterBottom
            >
                Products
            </Typography>

            <Grid
                container
                spacing={3}
            >

                {products.map(product => (

                    <Grid
                        key={product.id}
                        size={{
                            xs: 12,
                            md: 4
                        }}
                    >

                        <Card>

                            <CardContent>

                                <Typography
                                    variant="h6"
                                >
                                    {product.name}
                                </Typography>

                                <Typography
                                    sx={{ mt: 1 }}
                                >
                                    {product.description}
                                </Typography>

                                <Typography
                                    sx={{ mt: 2 }}
                                >
                                    ${product.price}
                                </Typography>

                                <Button
                                    sx={{ mt: 2 }}
                                    variant="contained"
                                    onClick={() =>
                                        navigate(
                                            `/products/${product.id}`
                                        )
                                    }
                                >
                                    View Details
                                </Button>

                            </CardContent>

                        </Card>

                    </Grid>

                ))}

            </Grid>

        </Container>
    );
}