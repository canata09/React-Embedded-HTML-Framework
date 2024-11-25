import React, { useState, useEffect } from 'react';

const SideMenu = ({ menuItems, activeSubmenu, handleMenuClick, handleClick }) => {





    // Toggle dropdown menu width
    const [isExpanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!isExpanded);
    };

    // Toggle dropdown menu visibility
    const [isOpen, setIsOpen] = useState(true);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        const dropdownElement = document.querySelector('.sidebar');
        if (dropdownElement && !dropdownElement.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (

        <div className="sidebar"  >


            <div className="tomenu" onClick={toggleDropdown}  >
                <a href="#link1" >Link 1</a>
            </div>

            <div className="dropdown-content" style={{ display: isOpen ? 'block' : 'none' }} >

                <div className={`sidedoc ${isExpanded ? 'expanded' : ''}`}>

                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <a onClick={() => { handleMenuClick(item.submenu); toggleMenu() }}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>

                <div className={`subdoc ${isExpanded ? 'expanded' : ''}`}>

                    {activeSubmenu && (

                        <div>
                            {activeSubmenu.map((subitem, index) => {
                                const handleSubfunction = () => {
                                    setIsOpen(false);
                                    handleClick(subitem.name);
                                };

                                return (
                                    <a onClick={handleSubfunction} href={`#${subitem.name}`} key={index}>{subitem.content}</a>
                                );
                            })}
                        </div>

                    )}

                </div>

            </div>


        </div>
    );
};

export default SideMenu;
