import React from 'react';
import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { AssignmentTurnedIn, Home , Mail, Work} from '@mui/icons-material';

const Sidebar = () => {


    const location = useLocation();
    const { pathname } = location;

    return (
        <div className='sidebar'>
            <div className="logo">
                <Link to="/">
                    <h2>ASTRA</h2>
                </Link>
            </div>
            <div className="job__availability">
                <p className="list__item">
                    <AssignmentTurnedIn />
                    <span>Available for job</span>
                </p>
            </div>

            <ul className="sidebar__list">
                <li className={pathname === "/" ? "list__item active" : "list__item"}>
                    <Link to="/" >
                        <Home />
                        <span>Home</span>
                    </Link>
                </li>
                <li className={pathname === "/profile" ? "list__item active" : "list__item"}>
                    <Link to="/profile">
                        <AssignmentTurnedIn />
                        <span>Profile</span>
                    </Link>
                </li>
                <li className={pathname === "/job" ? "list__item active" : "list__item"}>
                    <Link to="/job">
                        <Work />
                        <span>Apply for job</span>
                    </Link>
                </li>
                <li className={pathname === "/mail-box" ? "list__item active" : "list__item"}>
                    <Link to="/mail-box">
                        <Mail />
                        <span>Mailbox</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;