import React from 'react'
import './style.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-flex-container">
        <span>© {new Date().getFullYear()} MarchéRunner</span>
        <span>
          by{' '}
          <a
            href="https://github.com/andrewthamcc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Andrew Tham
          </a>
        </span>
      </div>
    </footer>
  )
}
