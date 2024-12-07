import React from 'react';

export const menuItems = [
  {
    name: 'Page 2',
    submenu: [
      <div className="forum-container">
        <div className="forum-header">
          <p className="forum-title">Forum</p>
        </div>
        <div className="forum-content">
          <ul className="user-list">
            <li className="user-item">
              <a href="/" className="user-link">
                <span className="bullet">•</span>User
              </a>
            </li>
          </ul>
          <input type="search" id="default-search" className="search-input" placeholder="Search Groups..." required />
          <ul className="group-list">
            <li className="group-item">
              <a href="#link1" className="group-link">
                <span className="bullet">•</span>Group 1
              </a>
            </li>
            <li className="group-item">
              <a href="/" className="group-link">
                <span className="bullet">•</span>Group 2
              </a>
            </li>
          </ul>
        </div>
      </div>
    ]
  },
];

const Universe = () => {
  return (
    <>
      <div className="rightdoc" >

        <div className="forum-container">
          <div className="forum-header">
            <p className="forum-title">Forum</p>
          </div>
          <div className="forum-content">
            <ul className="user-list">
              <li className="user-item">
                <a href="/" className="user-link">
                  <span className="bullet">•</span>User
                </a>
              </li>
            </ul>
            <input type="search" id="default-search" className="search-input" placeholder="Search Groups..." required />
            <ul className="group-list">
              <li className="group-item">
                <a href="#link1" className="group-link">
                  <span className="bullet">•</span>Group 1
                </a>
              </li>
              <li className="group-item">
                <a href="/" className="group-link">
                  <span className="bullet">•</span>Group 2
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="middledoc" >

        <div class="grid-container">
          <div class="grid-item">
            <div class="flex-container">
              <div class="flex-item">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the
                    bulk of the
                    card's content.</p>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  </svg>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  </svg>
                </div>
              </div>
              <div class="flex-item">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the
                    bulk of the
                    card's content.</p>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  </svg>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  </svg>
                </div>
              </div>
              <div class="flex-item">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <h6 class="card-subtitle">Card subtitle</h6>
                  <p class="card-text">Some quick example text to build on the card title and make up the
                    bulk of the
                    card's content.</p>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  </svg>
                  <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path
                      d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1z" />
                    <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="grid-item">
            <div class="flex-container">
              <div class="flex-item">1</div>
            </div>
          </div>
        </div>

      </div>

    </>
  );
};

export default Universe;
