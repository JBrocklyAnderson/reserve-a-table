import { Suspense } from "react";
import { Outlet } from "react-router-dom"; // Allow a parent to render child route elements
import Nav from "./common/Nav";
// import Home from "./home/Home";
// import Header from "./home/Header";
import Footer from "./common/Footer";

const Layout = () => {
    return (
        <>
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