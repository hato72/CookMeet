import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import ResponsiveAppBarNoLogin from "@/components/base/Header/HeaderNoLogin";
import Footer from "@/components/base/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ResponsiveAppBarNoLogin />
                <main>
                    <div>{children}</div>
                </main>
                <Footer />
                <br></br>
            </body>
        </html>
    );
};

export default Layout;
