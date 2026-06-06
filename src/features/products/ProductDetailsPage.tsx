import {
    Button,
    Card,
    CardContent,
    Container,
    Typography
} from "@mui/material";

import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    getProduct
} from "./productApi";
import type {Product} from "../types.ts";


export default function ProductDetailsPage() {

    const { id } =
        useParams();

    const navigate =
        useNavigate();

    const [product, setProduct] =
        useState<Product>();

    useEffect(() => {

        if (id) {

            getProduct(id)
                .then(setProduct);
        }

    }, [id]);

    if (!product) {

        return (
            <Container>
                Loading...
            </Container>
        );
    }

    return (

        <Container sx={{ mt: 5 }}>

            <Card>

                <CardContent>

                    <Typography
                        variant="h4"
                    >
                        {product.name}
                    </Typography>

                    <Typography
                        sx={{ mt: 2 }}
                    >
                        {product.description}
                    </Typography>

                    <Typography
                        sx={{ mt: 2 }}
                    >
                        Price: ${product.price}
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() =>
                            navigate(
                                `/orders/create/${product.id}`
                            )
                        }
                    >
                        Create Order
                    </Button>

                </CardContent>

            </Card>

        </Container>
    );
}