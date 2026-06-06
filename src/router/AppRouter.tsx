import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage.tsx";
import RegisterPage from "../features/auth/RegisterPage.tsx";
import ProductsPage from "../features/products/ProductsPage.tsx";
import ProductDetailsPage from "../features/products/ProductDetailsPage.tsx";
import OrdersPage from "../features/orders/OrdersPage.tsx";
import CreateOrderPage from "../features/orders/CreateOrderPage.tsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/register"
                    element={<RegisterPage />}
                />
                <Route
                    path="/products"
                    element={<ProductsPage />}
                />

                <Route
                    path="/products/:id"
                    element={<ProductDetailsPage />}
                />
                <Route
                    path="/orders"
                    element={<OrdersPage />}
                />

                <Route
                    path="/orders/create/:productId"
                    element={<CreateOrderPage />}
                />
            </Routes>
        </BrowserRouter>
    );
}