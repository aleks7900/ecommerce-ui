import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";

import { store } from "./store/store.ts";

const queryClient =
    new QueryClient();

ReactDOM.createRoot(
    document.getElementById("root")!
).render(

    <Provider store={store}>

        <QueryClientProvider
            client={queryClient}
        >

            <App />

        </QueryClientProvider>

    </Provider>
);