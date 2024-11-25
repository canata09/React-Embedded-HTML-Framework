import '../Heading.css';
import Universal, { menuItems as universalMenuItems } from '../pages/Universal';
import Universe, { menuItems as universeMenuItems } from '../pages/Universe';
import Normalize from '../pages/Normalize.js';
import Sidemenu from './Sidemenu/Sidemenu';
import '../Template.css';
import '../Table.css';
import React, { useState } from 'react';
const konuStili = {
    backgroundColor: 'beige',
};

const pagesMap = {
    universal: Universal,
    universe: Universe,
    normalize: Normalize,
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
                                <li><a onClick={() => handleClick('normalize')} href="#normalize">Normalize</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>

                <Sidemenu menuItems={menuItems} activeSubmenu={activeSubmenu} handleMenuClick={handleMenuClick} handleClick={handleClick} />

                <SelectedPage activeSubmenu={activeSubmenu} />

                <div className="leftdoc">
                    <div className="flex-container">
                        <div className="flex-item">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                    the
                                    card's content.</p>
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                </svg>
                                <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path
                                        d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="flex-item">1</div>
                        <div className="flex-item">1</div>
                        <div className="flex-item">1</div>
                        <div className="flex-item">1</div>
                    </div>
                </div>



                <div className="leftdoc" style={konuStili}>


                    <div class="title">
                        <h1>Title</h1>
                    </div>
                    <div class="subtitle">
                        <h2>Subtitle</h2>
                    </div>
                    <div class="component">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                    </div>



                </div>
            </div>
        </>
    );
}

export default Header;
