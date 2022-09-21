import React from 'react'
import { Text } from '../../components'
import { Layout } from '../../layout'
import { ReactComponent as NotFoundImage } from './assets/not-found.svg'
import './style.scss'

export const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="not-found container">
        <div className="not-found-title">
          <NotFoundImage />
          <h2>404</h2>
        </div>
        <Text>Sorry, page not found</Text>
      </div>
    </Layout>
  )
}
