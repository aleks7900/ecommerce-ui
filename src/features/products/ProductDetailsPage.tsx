import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    Container,
    Typography
} from "@mui/material";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    useQuery
} from "@tanstack/react-query";

import {
    getProduct
} from "./productApi";

export default function ProductDetailsPage() {

    const { id } =
        useParams();

    const navigate =
        useNavigate();

    const {
        data: product,
        isLoading,
        isError
    } = useQuery({

        queryKey: [
            "product",
            id
        ],

        queryFn: () =>
            getProduct(
                id!
            ),

        enabled: !!id
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

                    Failed to load product

                </Typography>

            </Container>
        );
    }

    if (!product) {

        return (

            <Container sx={{ mt: 5 }}>

                <Typography>

                    Product not found

                </Typography>

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
                        sx={{ mt: 3 }}
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