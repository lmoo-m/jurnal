import { router } from "@inertiajs/react";
import React from "react";

const JurnalTable = ({ jurnals }) => {
    const deleteJurnal = (id) => {
        router.delete(`/jurnal/${id}`);
    };

    return (
        <div className="overflow-x-auto flex items-center flex-col  mt-4">
            <h5 className="text-start text-lg my-2">Jurnal</h5>
            <table className="table sm:w-2  lg:w-2/3 shadow-xl table-normal border">
                {/* head */}
                <thead>
                    <tr>
                        <th>Tanggal</th>
                        <th>Kegiatan</th>
                        <th>Jam</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {jurnals.map((jurnal, i) => {
                        return (
                            <tr className="hover" key={i}>
                                <th>{jurnal.date}</th>
                                <td>{jurnal.title}</td>
                                <td>{jurnal.time}</td>
                                <td>
                                    <div className="flex justify-around">
                                        <button
                                            className="btn btn-error lg:btn-sm sm:btn-xs"
                                            onClick={() =>
                                                deleteJurnal(jurnal.id)
                                            }
                                        >
                                            hapus
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default JurnalTable;
