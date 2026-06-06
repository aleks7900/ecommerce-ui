import {
    Navigate
} from "react-router-dom";
import {useAuth} from "../features/auth/authApi.ts";

type Props = {
    children: React.ReactNode;
};

export default function ProtectedRoute({
                                           children
                                       }: Props) {

    const {
        isAuthenticated
    } = useAuth();

    if (!isAuthenticated) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return <>{children}</>;
}