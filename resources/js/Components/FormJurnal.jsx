import { useState } from "react";
import { router } from "@inertiajs/react";
import { generateDate } from "./DateFunction";

export const FormJurnal = ({ setShowForm }) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    const addJurnal = () => {
        const data = {
            title: title,
            date: generateDate(),
            time: time,
        };
        router.post("/jurnal", data);
        setShowForm(false);
    };

    return (
        <div className="flex flex-col w-1/2 bg-white shadow-xl radius rounded-xl p-5 absolute top-3 left-1/4 z-40">
            <label htmlFor="title">Kegiatan</label>
            <input
                placeholder="..."
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                className="input input-accent"
            />
            <label htmlFor="time" className="mt-3">
                Jam
            </label>
            <input
                placeholder="00:00 - 00:00"
                id="time"
                onChange={(e) => setTime(e.target.value)}
                className="input input-accent"
            />
            <div className="mt-3 flex justify-between">
                <button
                    className="btn  btn-error"
                    onClick={() => setShowForm(false)}
                >
                    Batal
                </button>
                <button className="btn btn-primary" onClick={() => addJurnal()}>
                    Tambah
                </button>
            </div>
        </div>
    );
};
export const FormEditJurnal = ({ setShowEdit }) => {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");

    const addJurnal = () => {
        const data = {
            title: title,
            time: time,
        };
        // router.post("/jurnal", data);
        setShowEdit(false);
    };

    return (
        <div className="flex flex-col w-1/2 bg-white shadow-xl radius rounded-xl p-5 absolute top-3 left-1/4 z-40">
            <label htmlFor="title">Kegiatan</label>
            <input
                placeholder="..."
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                className="input input-accent"
            />
            <label htmlFor="time" className="mt-3">
                Jam
            </label>
            <input
                placeholder="00:00 - 00:00"
                id="time"
                onChange={(e) => setTime(e.target.value)}
                className="input input-accent"
            />
            <div className="mt-3 flex justify-between">
                <button
                    className="btn  btn-error"
                    onClick={() => setShowEdit(false)}
                >
                    Batal
                </button>
                <button className="btn btn-primary" onClick={() => addJurnal()}>
                    Edit
                </button>
            </div>
        </div>
    );
};
