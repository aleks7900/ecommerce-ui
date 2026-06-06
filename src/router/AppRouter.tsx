import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../features/auth/LoginPage.tsx";
import RegisterPage from "../features/auth/RegisterPage.tsx";
import ProductsPage from "../features/products/ProductsPage.tsx";
import ProductDetailsPage from "../features/products/ProductDetailsPage.tsx";
import OrdersPage from "../features/orders/OrdersPage.tsx";
import CreateOrderPage from "../features/orders/CreateOrderPage.tsx";
import ProtectedRoute from "./ProtectedRoute";
import AppLayout from "../layouts/AppLayout.tsx";
import DashboardPage from "../pages/DashboardPage.tsx";
import AnalyticsPage from "../pages/AnalyticsPage.tsx";
import ProfilePage from "../pages/ProfilePage.tsx";
import CreateProductPage from "../features/products/CreateProductPage.tsx";

export function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route
                    path="/register"
                    element={<RegisterPage/>}
                />
                <Route
                    element={
                        <ProtectedRoute>
                            <AppLayout />
                        </ProtectedRoute>
                    }
                >

                    <Route
                        path="/"
                        element={<DashboardPage />}
                    />

                    <Route
                        path="/products"
                        element={<ProductsPage />}
                    />

                    <Route
                        path="/products/create"
                        element={<CreateProductPage />}
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

                    <Route
                        path="/analytics"
                        element={<AnalyticsPage />}
                    />

                    <Route
                        path="/profile"
                        element={<ProfilePage />}
                    />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}