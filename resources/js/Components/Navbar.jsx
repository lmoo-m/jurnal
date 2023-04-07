import React from "react";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <nav className=" flex justify-between items-center py-1 px-6 bg-gray-400 text-white">
            <Link href="/">Jurnal PKL</Link>
            <div>
                <Link
                    className=" btn btn-ghost"
                    method="post"
                    href={route("logout")}
                    as="button"
                >
                    logout
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
