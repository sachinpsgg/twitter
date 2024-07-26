import React from 'react';

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label }) => {
    return (
        <div className="flex items-center p-2 hover:bg-gray-200 text-amber-50 hover:text-black rounded cursor-pointer">
            <div className="mr-4">{icon}</div>
            <div>{label}</div>
        </div>
    );
};

export default NavItem;
