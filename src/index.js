import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import PrivateRoute from "./components/PrivateRoute";
import App from "./App";
import Login from "./components/Other/Login";
import Signup from "./components/Other/Signup";
import Home from "./pages/Home";
import LiveScore from "./components/LiveScore/LiveScore";
import Profile from "./pages/Profile";
import Error from "./components/Other/Error";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <QueryClientProvider client={queryClient}>
        <Helmet>
            <link rel="icon" href={require("./logo.ico")} />
            <title>Cric-o-pedia</title>
        </Helmet>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<App />}>
                        <Route path="" element={<Home />} />
                        <Route exact path="profile" element={<PrivateRoute />}>
                            <Route exact path="" element={<Profile />} />
                        </Route>
                        <Route path="score">
                            <Route path=":id" element={<LiveScore />} />
                        </Route>
                        <Route path="*" element={<Error />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </QueryClientProvider>
);
