import React, { useState } from "react";
import '../assets/SideBar_Css/Side_Css.css';
import { ReactComponent as Speedometer2 } from '../assets/icon/house-heart.svg';
import { ReactComponent as Subscription } from '../assets/icon/pencil-square.svg';
import { ReactComponent as Abonnement } from '../assets/icon/credit-card-2-back-fill.svg';
import { ReactComponent as Edit_Profil } from '../assets/icon/pen.svg';
/**import { ReactComponent as CustomersIcon } from '../assets/icon/customers.svg';**/

function SideBar() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const navItems = [
        { name: 'Tableau de bord', icon: <Speedometer2 className="bi pe-none me-2" width="16" height="16" /> },
        { name: 'Mes candidatures', icon: <Subscription className="bi pe-none me-2" width="16" height="16" /> },
        { name: 'Mon abonnements', icon: <Abonnement className="bi pe-none me-2" width="16" height="16" /> },
        { name: 'Mon profil', icon: <Edit_Profil className="bi pe-none me-2" width="16" height="16" /> }
        /**{ name: 'Customers', icon: <CustomersIcon className="bi pe-none me-2" width="16" height="16" /> }**/
    ];

    return (
        <div className="card card-side_bar">
            <div className="card-body">
                <div className="d-flex flex-column flex-shrink-0 p-3" style={{ width: '280px' , height: 'calc(105vh - 200px)'}}>
                    <ul className="nav nav-pills flex-column mb-auto">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="nav-item py-1"
                                onClick={() => handleClick(index)}
                            >
                                <a href="#" className={`link nav-link ${activeIndex === index ? 'active-link' : ''}`} aria-current={activeIndex === index ? "page" : undefined}>
                                    {item.icon}
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
