import React from "react";

function Content_Table() {
    return(
        <div className="card">
            <div className="card-body">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Université</th>
                            <th>Status</th>
                            <th>Action</th>
                            <th>Confirmation établissement</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
}

export default {Content_Table}