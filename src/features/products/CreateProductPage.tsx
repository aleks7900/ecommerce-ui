import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography
} from "@mui/material";

import {
    useState
} from "react";

import {
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import {
    useNavigate
} from "react-router-dom";

import {
    createProduct
} from "./productApi";

export default function CreateProductPage() {

    const navigate =
        useNavigate();

    const queryClient =
        useQueryClient();

    const [form, setForm] =
        useState({

            name: "",
            description: "",
            price: ""
        });

    const mutation =
        useMutation({

            mutationFn:
            createProduct,

            onSuccess: () => {

                queryClient.invalidateQueries({
                    queryKey: ["products"]
                });

                navigate("/products");
            }
        });

    const handleChange =
        event => {

            setForm({

                ...form,

                [event.target.name]:
                event.target.value
            });
        };

    const handleSubmit =
        event => {

            event.preventDefault();

            mutation.mutate({

                name:
                form.name,

                description:
                form.description,

                price:
                    Number(form.price)
            });
        };

    return (

        <Container
            maxWidth="sm"
            sx={{ mt: 4 }}
        >

            <Paper sx={{ p: 4 }}>

                <Typography
                    variant="h4"
                    gutterBottom
                >
                    Create Product
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                >

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        label="Description"
                        name="description"
                        multiline
                        rows={4}
                        value={form.description}
                        onChange={handleChange}
                    />

                    <TextField
                        fullWidth
                        required
                        margin="normal"
                        label="Price"
                        name="price"
                        type="number"
                        value={form.price}
                        onChange={handleChange}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3 }}
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending
                            ? "Creating..."
                            : "Create Product"}
                    </Button>

                </Box>

            </Paper>

        </Container>
    );
}