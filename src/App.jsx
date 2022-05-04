import Header from "./components/Nav/Header/Header";
import Footer from "./components/Nav/Footer";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="bg-primary-bg font-raleway">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
