import React from "react";
import {ReactComponent as Recuq} from '../assets/icon/folder-check.svg';
import {ReactComponent as Dossier} from '../assets/icon/envelope-check.svg';

function Home() {
    return(
        <div className="row">
            <div className="col-6">
                <div className="card card-home">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-9">
                                <div className="m-3">
                                    <h6>Dossier envoyés</h6>
                                    <h2 className="py-1">123</h2>
                                    <p className="py-1">Le nombre de dossier encore non confirmés par les
                                    universités.</p>
                                </div>
                            </div>
                            <div className="col-3 py-4">
                                <div className="card">
                                    <div className="card-body" style={{backgroundColor: '#74BBF5', borderRadius:'15px'}}>
                                        <Dossier className="m-1" style={{color:'blue'}} width="45" height="45" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="card card-home">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-9">
                                <div className="m-3">
                                    <h6>Dossier accéptés</h6>
                                    <h2 className="py-1">123</h2>
                                    <p className="py-1">Le nombre de dossier accéptés par les
                                    universités.</p>
                                </div>
                            </div>
                            <div className="col-3 py-4">
                                <div className="card">
                                    <div className="card-body" style={{backgroundColor: '#B0E5A2', borderRadius: '15px'}}>
                                        <Recuq style={{color:'green'}} width="50" height="50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home