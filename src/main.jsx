import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LanguageAwareMain from "../src/components/LanguageAwareMain/LanguageAwareMain";
import { RecoilRoot } from "recoil";

import "../index.scss";

const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home"));

const router = createBrowserRouter(
    [
        {
            element: (
                <Suspense fallback={""}>
                    <Layout />
                </Suspense>
            ),
            children: [
                { path: "*", element: <h1>404</h1> },
                {
                    path: "/ka",
                    element: (
                        <Suspense fallback={""}>
                            <Home />
                        </Suspense>
                    ),
                },
                {
                    path: "/en",
                    element: (
                        <Suspense fallback={""}>
                            <Home />
                        </Suspense>
                    ),
                },
            ],
        },
    ],
    {
        basename: "/museum",
    }
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RecoilRoot>
            <LanguageAwareMain>
                <RouterProvider router={router}>
                    <Home />
                </RouterProvider>
            </LanguageAwareMain>
        </RecoilRoot>
    </React.StrictMode>
);
