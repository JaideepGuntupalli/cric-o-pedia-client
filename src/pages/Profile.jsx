import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Alert from "./../components/Other/Alert";

function Profile() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { currentUser, logout } = useAuth();

    async function handleLogout() {
        setError(" ");
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            setError(`Failed to Log out. ${error}`);
        }
    }

    return (
        <>
            <Helmet>
                <title>Profile | Cric-o-pedia</title>
            </Helmet>
            <div className="w-4/5 mx-auto text-white">
                <p>Email: {currentUser.email}</p>
                <button
                    onClick={handleLogout}
                    className="bg-[#FFB923] text-black px-4 py-2 rounded-md font-bold text-2xl hover:bg-[#FFB923]/80"
                >
                    Logout
                </button>
                {error && <Alert msg={error} />}
            </div>
        </>
    );
}

export default Profile;
