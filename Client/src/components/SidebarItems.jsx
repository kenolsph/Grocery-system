import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import { Settings } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SidebarItems = () => {
    const [activeDropdown, setActiveDropdown] = useState(null); // Track which dropdown is active
    const navigate = useNavigate();

    const navItems = [
        { name: "Dashboard", icon: <HomeIcon />, link: "/dashboard" },
        {
            name: "Inventory", icon: <CategoryIcon />, link: "/inventory", dropdown: [
                { name: "Restaurant", link: "/inventory/restaurant" },
                { name: "Bookshop", link: "/inventory/bookshop" },
                { name: "Bottle Water Industry", link: "/inventory/bottle-water" },
            ]
        },
        { name: "Sales", icon: <TrendingUpIcon />, link: "/sales" },
        { name: "Service", icon: <ShoppingCartIcon />, link: "/service" },
        { name: "Sales Report", icon: <EmailIcon />, link: "/reports" },
        { name: "User  Management", icon: <ManageAccountsIcon />, link: "/management" }
    ];

    const profileItems = [
        { name: "Profile", icon: <AccountCircleIcon />, link: "/profile" },
        { name: "Settings", icon: <Settings />, link: "/settings" },
        { name: "Logout", icon: <LogoutIcon />, link: "/" },
    ];

    const handleItemClick = (item) => {
        if (item.dropdown) {
            // Toggle dropdown if the item has a dropdown
            setActiveDropdown(activeDropdown === item.name ? null : item.name);
        } else {
            // Navigate to the link directly
            navigate(item.link);
        }
    };

    return (
        <>
            <ul className='mt-8 w-52'>
                {navItems.map((item) => (
                    <li key={item.name} className="flex flex-col">
                        <div
                            className="flex items-center py-2 px-4 hover:bg-gray-200 rounded-lg cursor-pointer"
                            onClick={() => handleItemClick(item)} // Handle item click
                        >
                            <span className="mr-2">{item.icon}</span>
                            {item.name}
                        </div>
                        {item.dropdown && activeDropdown === item.name && ( // Show dropdown if active
                            <ul className="ml-4">
                                {item.dropdown.map((dropdownItem) => (
                                    <li key={dropdownItem.name} className="flex items-center py-2 px-4 hover:bg-gray-300 rounded-lg">
                                        <Link to={dropdownItem.link} className="flex items-center w-full">
                                            {dropdownItem.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
            <div className="log-out fixed bottom-16 ">
                <ul className='mt-8 w-52'>
                    {profileItems.map((item) => (
                        <li key={item.name} className="flex items-start py-2 px-4 hover:bg-gray-200 rounded-lg">
                            <Link to={item.link} className="flex items-center w-full">
                                <span className="mr-2">{item.icon}</span>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default SidebarItems;