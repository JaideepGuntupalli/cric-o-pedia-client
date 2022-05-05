import { useState } from "react";
import { Helmet } from "react-helmet";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Nav/Logo";
import Alert from "./Alert";
import cricket from "../../assets/cricket.png";
import { getAuth, updateProfile } from "firebase/auth";

const auth = getAuth();

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { signup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await signup(name, email, pass);
            await updateProfile(auth.currentUser, {
                displayName: name.toString(),
                photoURL: "https://picsum.photos/200/200.webp",
            });
            navigate("/profile");
        } catch (error) {
            setError(
                `Failed to create an account. Please try again later.${error}`
            );
        }
        setLoading(false);
    }

    return (
        <div className="bg-primary-bg text-gray-200 min-h-screen px-8 sm:px-16 md:px-28 xl:px-60 py-28 flex justify-around md:justify-between flex-col md:flex-row">
            <Helmet>
                <title>SignUp | Cric-o-pedia</title>
            </Helmet>
            <section className="md:w-[45%] my-auto flex flex-col gap-8">
                <Logo />
                <h1 className="text-5xl text-[#FFB923] font-bold">
                    Get Started!!
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
                    <label htmlFor="fname" className="font-bold text-3xl">
                        Name
                    </label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="text-gray-800 placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-white rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-[#FFB923] focus:ring-[#FFB923] focus:ring-1 sm:text-lg"
                        type="text"
                        name="fname"
                        id="fname"
                        placeholder="How are you addressed by?"
                        required
                    />
                </div>
                <div className="flex flex-col gap-2 ">
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
                        placeholder="Set a Password"
                        required
                    />
                </div>

                <input
                    disabled={loading}
                    type="submit"
                    value="Sign Up"
                    className="bg-[#FFB923] text-black px-4 py-2 rounded-md font-bold text-2xl hover:bg-[#FFB923]/80"
                />
                {error && <Alert msg={error} />}
                <Link
                    to="/login"
                    className="underline text-gray-500 text-center"
                >
                    Already have an account? Login!
                </Link>
            </form>
        </div>
    );
}

export default Signup;
