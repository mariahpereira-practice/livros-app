import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";

export function Layout() {
    return (
        <div className="layout-shell">
            <div className="layout-body">
                <aside className="layout-header">
                    <Header></Header>
                </aside>
                <main className="layout-content">
                    <Outlet />
                </main>
            </div>
            <footer className="layout-footer">
                <Footer></Footer>
            </footer>
        </div>
    );
}