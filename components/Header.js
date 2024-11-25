import Universal, { menuItems as universalMenuItems } from '../pages/Universal';
import Universe, { menuItems as universeMenuItems } from '../pages/Universe';
import React, { useState } from 'react';
const konuStili = {
    backgroundColor: 'beige',
};

const pagesMap = {
    universal: Universal,
    universe: Universe,
};

const Header = () => {
    const [page, setPage] = useState('universal');
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const menuItems = [...universalMenuItems, ...universeMenuItems];

    const handleClick = (newPage) => {
        setPage(newPage);
    };

    const handleMenuClick = (submenu) => {
        setActiveSubmenu(submenu);
    };

    const SelectedPage = pagesMap[page];

    return (
        <>
            <div className="App">
                <div className="blogger">

                    <div className="header">
                        <nav>
                            <ul>
                                <li><a onClick={() => handleClick('universal')} href="#universal">Universal</a></li>
                                <li><a onClick={() => handleClick('universe')} href="#universe">Universe</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>

                <div className="sidebar"  >


                    <div className="tomenu"   >
                        <a href="#link1" ></a>
                    </div>

                    <div class="dropdown-content" style={{ display:  'block' }} >

                        <div className="sidedoc expanded">
                            <div class="h-screen px-3 py-4 overflow-hidden bg-white dark:bg-gray-800">






                                <ul class="space-y-2 font-medium">


                                    {menuItems.map((item, index) => {
                                        let handleFunction;
                                        if (index === 0) {
                                            handleFunction = () => { handleMenuClick(item.submenu);  handleClick('roller'); }; // Item 1
                                        } else if (index === 1) {
                                            handleFunction = () => { handleMenuClick(item.submenu);  handleClick('blogyonetimi'); }; // Item 2
                                        } else if (index === 2) {
                                            handleFunction = () => { handleMenuClick(item.submenu);  handleClick('profil') }; // Item 3
                                        } else if (index === 3) {
                                            handleFunction = () => { handleMenuClick(item.submenu); handleClick('ogretmenyonetimi') }; // Item 4
                                        } else if (index === 4) {
                                            handleFunction = () => { handleMenuClick(item.submenu);  handleClick('kurslar') }; // Item 5
                                        } else if (index === 5) {
                                            handleFunction = () => { handleMenuClick(item.submenu);  handleClick('kursyonetimi') }; // Item 6
                                        } else if (index === 6) {
                                            handleFunction = () => { handleMenuClick(item.submenu);  handleClick('projeyonetimi') }; // Item 7
                                        } else {
                                            handleFunction = () => { handleMenuClick(item.submenu); }; // Diğerleri
                                        }

                                        return (
                                            <li key={index}>
                                                <a
                                                    onClick={handleFunction}
                                                    href={`#${item.name}`}
                                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                                >
                                                    <img
                                                        src={item.icon}
                                                        alt={item.name}
                                                        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 18 18"
                                                    />
                                                    <span className="flex-1 ms-3 whitespace-nowrap">{item.name}</span>
                                                </a>
                                            </li>
                                        );
                                    })}


                                </ul>




                            </div>


                        </div>

                        <div className="subdoc expanded">

                            {activeSubmenu && (

                                <div class="h-screen overflow-y-auto">
                                    {activeSubmenu.map((subitem, index) => {
                                        const handleSubfunction = () => {
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

                <SelectedPage handleClick={handleClick} />
            </div>
        </>
    );
}

export default Header;
