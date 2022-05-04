import { Link } from "react-router-dom";
import logo from "./../../logo.svg";

function Logo() {
    return (
        <Link to="/" className="flex items-center font-mulish">
            <img src={logo} alt="Cric-o-pedia Logo" className="h-12" />
            <section className="text-white">
                <p className="text-lg font-extrabold leading-none">CRIC-O</p>
                <p className="text-2xl font-medium leading-none">PEDIA</p>
            </section>
        </Link>
    );
}

export default Logo;
