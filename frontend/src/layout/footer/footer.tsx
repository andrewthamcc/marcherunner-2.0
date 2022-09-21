import React from 'react'
import { Text } from '../../components'
import './style.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-flex-container">
        <Text color="white" span variant="body-copy-small">
          © {new Date().getFullYear()} MarchéRunner
        </Text>
        <Text color="white" span variant="body-copy-small">
          by{' '}
          <a
            href="https://github.com/andrewthamcc"
            rel="noopener noreferrer"
            target="_blank"
          >
            Andrew Tham
          </a>
        </Text>
      </div>
    </footer>
  )
}
