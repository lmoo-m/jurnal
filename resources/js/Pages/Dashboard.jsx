import { FormJurnal } from "@/Components/FormJurnal";
import JurnalTable from "@/Components/JurnalTable";
import Navbar from "@/Components/Navbar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard(props) {
    const [showForm, setShowForm] = useState(false);
    return (
        <>
            <Navbar />

            {showForm ? <FormJurnal setShowForm={setShowForm} /> : ""}

            <div className="flex justify-center mt-3">
                <div className="container flex justify-between">
                    <input
                        className="input input-success"
                        placeholder="cari..."
                    />
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowForm(true)}
                    >
                        Tambah
                    </button>
                </div>
            </div>
            <JurnalTable jurnals={props.data.jurnals} />
        </>
    );
}
