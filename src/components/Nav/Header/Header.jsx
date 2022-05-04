import Logo from "../Logo";
import NavItem from "./NavItem";
import SearchIcon from "./../../../assets/icons/search.svg";

function Header() {
    return (
        <header className="flex w-4/5 justify-between items-center mx-auto py-6">
            <Logo />
            <nav className="flex gap-8">
                <NavItem name="Matches" />
                <NavItem name="Tournaments" />
                <NavItem name="Players" />
                <NavItem name="Teams" />
                <section className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className=" bg-transparent placeholder:text-white placeholder:opacity-40 border-b-2 border-white/40 text-white outline-none pr-5 focus:border-white"
                    />
                    <img
                        src={SearchIcon}
                        alt=""
                        className="h-5 absolute right-0 top-0"
                    />
                </section>
            </nav>
        </header>
    );
}

export default Header;
