import React from 'react';
import styles from './Universal.module.css';

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
      <div className={styles.rightdoc} >

        <div className="forum-container">
          <div className="forum-header">
            <p className="forum-title">Forum</p>
          </div>
        </div>

      </div>

      <div className={styles.middledoc} >

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

export default Universal;
