import { Link } from "react-router-dom";

function NavItem({ name, to }) {
    return (
        <Link
            to={to ? to : "#"}
            className="text-white opacity-40 hover:opacity-100 navitem"
        >
            {name}
        </Link>
    );
}

export default NavItem;
