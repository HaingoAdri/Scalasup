import React from "react";
import '../assets/Header.css';
import logo from '../assets/Logo_Scalasup/Capture d’écran 2024-07-15 à 10.56.33.png';
import { ReactComponent as Notif } from '../assets/icon/bell-fill.svg';
function Header() {
    return(
    <header class="p-3 mb-3 border-bottom" style={{backgroundColor:'white'}}>
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-md-0">
                    <li><img src={logo} alt="mdo" width="180" height="60" /></li>
                </ul>


                <div class="dropdown text-end nav">
                    <a href="#" class="nav-link d-block link-body-emphasis text-decoration-none">
                        <Notif className='icons' width="20" height="20" />
                    </a>
                    <a href="#" class="nav-link d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="30" height="30" class="rounded-circle" />
                    </a>
                    <ul class="dropdown-menu text-small">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    );
}
export default Header;