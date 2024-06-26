import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBell, faChevronDown, faChevronRight, faHome, faMoon} from '@fortawesome/free-solid-svg-icons';
import '../Styles/Topbar.css';
import {useNavigate} from "react-router-dom";

const Topbar = () => {
    const [dropdown1Active, setDropdown1Active] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdown1Active(!dropdown1Active);
    };
    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className="topbar">
            <div className="left">
                <h2>Bonjour, Marc</h2>
            </div>
            <div className="right">
                <button className="home-btn" onClick={handleHome}>
                    <FontAwesomeIcon icon={faHome}/>
                </button>
                <button className="notification-btn">
                    <FontAwesomeIcon icon={faBell}/>
                </button>
                <button className="theme-btn">
                    <FontAwesomeIcon icon={faMoon}/>
                </button>
                <div className={`dropdown ${dropdown1Active ? 'active' : ''}`}>
                    <button className="profile-btn" onClick={toggleDropdown}>
                        <div className="profile-icon">MJ</div>
                        <div className="profile-info">
                            <div>Vitrole PADLE</div>
                            <div>vpadle@goodmail.io</div>
                        </div>
                        <FontAwesomeIcon icon={dropdown1Active ? faChevronDown : faChevronRight}
                                         className="dropdown-icon"/>
                    </button>
                    {dropdown1Active && (
                        <ul className="submenu">
                            <li><a href="#item3">Item 3</a></li>
                            <li><a href="#item4">Item 4</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Topbar;
