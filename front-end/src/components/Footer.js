import React from 'react'

const Footer = () => {
  return (
<>
<footer>
      <div class="columns">
        <div class="footer-column">
          <h1 class="footer-column-title">Column title</h1>
          <ul class="footer-column-items">
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
          </ul>
        </div>
        <div class="footer-column">
          <h1 class="footer-column-title">Column title</h1>
          <ul class="footer-column-items">
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
          </ul>
        </div>

        <div class="footer-column">
          <h1 class="footer-column-title">Column title</h1>
          <ul class="footer-column-items">
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
            <li class="footer-column-item">lorem ipsum</li>
          </ul>
        </div>
      </div>

      <div class="footer-right">
        <div class="footer-logos">
          <img src="assets/imgs/fb.png" alt="facebook logo" />
          <img src="assets/imgs/yt.png" alt="youtube logo" />
          <img src="assets/imgs/tw.png" alt="twitter logo" />
          <img src="assets/imgs/ig.png" alt="instagram logo" />
        </div>

        <div class="location">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_311)">
                <path
                  d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_311">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>United States</span>
          </div>
        </div>

        <div class="legal">
        </div>
      </div>
    </footer>
</>
  )
}

export default Footer
