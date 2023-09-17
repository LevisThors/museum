// import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/Navbar/Navbar";
import FooterComponent from "../components/Footer/Footer";

export default function Layout() {
    return (
        <>
            <NavbarComponent />
            <Outlet />
            <FooterComponent />
        </>
    );
}
