import React from 'react';

export const menuItems = [
  {
    name: 'Page 1',
    submenu: [
      {
        name: 'Subpage 1',
        content: [
          <div className="forum-container">
            <div className="forum-header">
              <p className="forum-title">Subpage 1</p>
            </div>
          </div>
        ],
      },
      {
        name: 'Subpage 1',
        content: [
          <div className="forum-container">
            <div className="forum-header">
              <p className="forum-title">Subpage 1</p>
            </div>
          </div>
        ],
      },
      {
        name: 'Subpage 1',
        content: [
          <div className="forum-container">
            <div className="forum-header">
              <p className="forum-title">Subpage 1</p>
            </div>
          </div>
        ],
      },

    ]
  },
];
const Universal = () => {
  return (
    <>
      <div className="rightdoc" >

        <div className="forum-container">
          <div className="forum-header">
            <p className="forum-title">Forum</p>
          </div>
        </div>

      </div>

      <div className="middledoc" >



      </div>

    </>
  );
};

export default Universal;
