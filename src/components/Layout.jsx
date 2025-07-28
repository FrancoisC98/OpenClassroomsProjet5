import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/Banner.scss';
import '../styles/Layout.scss';


function Layout({ children }) {
    return (
        <>
        <div className="layout-wrapper">
        <Header />
        <main><Outlet /></main>
        </div>
        <Footer />
        </>
    );
}



export default Layout