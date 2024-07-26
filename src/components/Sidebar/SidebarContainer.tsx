import React from 'react';
import NavList from "./NavList";
import Label from "../Label";

const SidebarContainer: React.FC = () => {
    return (
        <div className="w-64 h-screen p-4 bg-black border-r border-gray-200">
            <div className="mb-8">
                <Label label="Twitter"/>
            </div>
            <NavList />
        </div>
    );
};

export default SidebarContainer;
