import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import logo from "./iscam.jpg";
import inscae from "./téléchargement.jpeg";
import itu from "./images.jpeg";

const candidatures = [
    {
        universite: "Inscam",
        progress: 25,
        status: "Non confirmés",
        statusClass: "bg-danger",
        image: logo
    },
    {
        universite: "Inscae",
        progress: 45,
        status: "Non confirmés",
        statusClass: "bg-danger",
        image: inscae
    },
    {
        universite: "ITU",
        progress: 100,
        status: "Confirmés",
        statusClass: "bg-success",
        image: itu
    },
];

const itemsPerPage = 2;

function Content_Table() {
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = candidatures.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(candidatures.length / itemsPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return(
        <div className="card py-2">
            <div className="card-body m-3">
                <div className="mb-3">
                    <h5 className="fw-bold">Liste de vos candidatures :</h5>
                </div>
                <table className="table table-bordered">
                    <thead className="text-center">
                        <tr>
                            <th style={{width:'300px'}}>Université</th>
                            <th style={{width:'200px'}}>Status</th>
                            <th>Confirmation établissement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((candidature, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={candidature.image} style={{width: '100px', height: '50px', marginRight:' 15px'}} alt={candidature.universite} />
                                    {candidature.universite}
                                </td>
                                <td className="py-4">
                                    <div className="progress">
                                        <div className={`progress-bar ${candidature.statusClass}`} role="progressbar" style={{width: `${candidature.progress}%`}} aria-valuenow={candidature.progress} aria-valuemin="0" aria-valuemax="100">
                                            {candidature.progress}%
                                        </div>
                                    </div>
                                </td>
                                <td className="py-3">
                                    <span className={`badge rounded-pill ${candidature.statusClass}`}>{candidature.status}</span>
                                </td>
                                <td>
                                    <a className="btn btn-info">
                                        Voir détails
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <button onClick={handlePreviousPage} className="btn btn-light me-2" disabled={currentPage === 1}>
                        <FaChevronLeft />
                    </button>
                    <span className="badge bg-primary rounded-circle p-3">{currentPage}</span>
                    <button onClick={handleNextPage} className="btn btn-light ms-2" disabled={currentPage === totalPages}>
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Content_Table;
