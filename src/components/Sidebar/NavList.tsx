import React from 'react';
import NavItem from './NavItem';
import { FaHome, FaHashtag, FaBell, FaEnvelope } from 'react-icons/fa';

const NavList: React.FC = () => {
    const navItems = [
        { icon: <FaHome />, label: 'Home' },
        { icon: <FaHashtag />, label: 'Explore' },
        { icon: <FaBell />, label: 'Notifications' },
        { icon: <FaEnvelope />, label: 'Messages' },
    ];

    return (
        <div className="space-y-2">
            {navItems.map((item, index) => (
                <NavItem key={index} icon={item.icon} label={item.label} />
            ))}
        </div>
    );
};

export default NavList;
