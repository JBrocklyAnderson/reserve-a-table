import { Suspense } from "react";
import { Outlet } from "react-router-dom"; // Allow a parent to render child route elements
import Scroll from "./context/Scroll";
import Nav from "./common/Nav";
import Footer from "./common/Footer";


const Layout = () => {
    return (
        <>
            <Scroll />
            <Nav />
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    );
};

export default Layout;