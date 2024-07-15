import React from "react";

function Content_Table() {
    return(
        <div className="card py-2">
            <div className="card-body m-3">
                <label className="">Vos données</label>
                <br />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Université</th>
                            <th>Status</th>
                            <th style={{width:'30px'}}>Confirmation établissement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Inscam</td>
                            <td>
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" style={{width: '25%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Content_Table