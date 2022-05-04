function NavItem({ name }) {
    return (
        <a
            href="https://www.cricbuzz.com/"
            className="text-white opacity-40 hover:opacity-100 navitem"
        >
            {name}
        </a>
    );
}

export default NavItem;
