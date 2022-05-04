import Logo from "./Logo";
import NavItem from "./Header/NavItem";

function Footer() {
    return (
        <footer className="bg-footer-bg flex p-20 font-raleway justify-around items-center">
            <Logo />
            <div className="w-[0.5px] h-20 bg-white hidden md:block"></div>
            <div className="flex flex-col gap-2">
                <h3 className="text-white/40 font-semibold">SiteMap</h3>
                <NavItem name="Matches" />
                <NavItem name="Tournaments" />
                <NavItem name="Players" />
                <NavItem name="Teams" />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-white/40 font-semibold">SiteMap</h3>
                <NavItem name="Matches" />
                <NavItem name="Tournaments" />
                <NavItem name="Players" />
                <NavItem name="Teams" />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-white/40 font-semibold">SiteMap</h3>
                <NavItem name="Matches" />
                <NavItem name="Tournaments" />
                <NavItem name="Players" />
                <NavItem name="Teams" />
            </div>
        </footer>
    );
}

export default Footer;
