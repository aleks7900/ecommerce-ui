import {Button, Card, CardContent, CircularProgress, Container, Grid, Typography} from "@mui/material";

import {useEffect, useState} from "react";

import {getProducts} from "./productApi";

import {useNavigate} from "react-router-dom";
import type {Product} from "../types.ts";

export default function ProductsPage() {

    const navigate =
        useNavigate();

    const [products, setProducts] =
        useState<Product[]>([]);

    const [loading, setLoading] =
        useState(true);

    async function loadProducts() {

        try {

            const data =
                await getProducts();

            setProducts(data);

        } finally {

            setLoading(false);
        }
    }

    useEffect(() => {

        loadProducts();

    }, []);

    if (loading) {

        return (

            <Container sx={{mt: 5}}>

                <CircularProgress/>

            </Container>
        );
    }

    return (

        <Container sx={{mt: 4}}>

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
                        size={{
                            xs: 12,
                            md: 4
                        }}
                        key={product.id}
                    >

                        <Card>

                            <CardContent>

                                <Typography
                                    variant="h6"
                                >
                                    {product.name}
                                </Typography>

                                <Typography
                                    sx={{mt: 1}}
                                >
                                    {product.description}
                                </Typography>

                                <Typography
                                    sx={{mt: 2}}
                                >
                                    ${product.price}
                                </Typography>

                                <Button
                                    sx={{mt: 2}}
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