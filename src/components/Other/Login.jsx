import { useState } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Nav/Logo";
import Alert from "./Alert";
import cricket from "../../assets/cricket.png";

function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await login(email, pass);
            navigate("/");
        } catch (error) {
            setError(`Failed to login. Please try again later.${error}`);
        }
        setLoading(false);
    }

    return (
        <div className="bg-primary-bg text-gray-200 h-screen px-8 sm:px-16 md:px-28 xl:px-60 py-28 flex justify-around md:justify-between flex-col md:flex-row">
            <Helmet>
                <title>Login | Cric-o-pedia</title>
            </Helmet>
            <section className="md:w-[45%] my-auto flex flex-col gap-8">
                <Logo />
                <h1 className="text-5xl text-[#FFB923] font-bold">
                    Welcome Back!!
                </h1>
                <div>
                    <img
                        src={cricket}
                        alt="Batsman"
                        className="hidden md:block w-60 mx-auto"
                    />
                </div>
            </section>
            <form
                action="#"
                className="flex flex-col gap-8 md:w-[45%] my-auto"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-bold text-3xl">
                        Email
                    </label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="text-gray-800 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-white rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-[#FFB923] focus:ring-[#FFB923] focus:ring-1 sm:text-lg"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="What's your email?"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="font-bold text-3xl">
                        Password
                    </label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        className="text-gray-800 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-white rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-[#FFB923] focus:ring-[#FFB923] focus:ring-1 sm:text-lg"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Shh..."
                        required
                    />
                </div>

                <input
                    disabled={loading}
                    type="submit"
                    value="Login"
                    className="bg-[#FFB923] text-black px-4 py-2 rounded-md font-bold text-2xl hover:bg-[#FFB923]/80"
                />
                {error && <Alert msg={error} />}
                <div className="flex flex-col gap-2">
                    <a
                        href="signup"
                        className="underline text-gray-500 text-center"
                    >
                        Forgot Password
                    </a>
                    <Link
                        to="/signup"
                        className="underline text-gray-500 text-center"
                    >
                        Don't have an account? Sign Up!
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Login;
