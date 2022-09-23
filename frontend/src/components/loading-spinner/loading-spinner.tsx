import React from 'react'
import Spinner from './assets/spinner.svg'
import './style.scss'

export const LoadingSpinner: React.FC = () => (
  <div className="loading">
    <div className="loading-spinner">
      <img alt="loading..." src={Spinner} />
    </div>
  </div>
)
