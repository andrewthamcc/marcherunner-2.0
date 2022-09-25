import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, Text } from '../../components'
import { Layout } from '../../layout'
import Screenshot from './assets/marcherunner-list.png'
import { ReactComponent as Profile } from './assets/profile.svg'
import { ReactComponent as List } from './assets/list.svg'
import { ReactComponent as Cart } from './assets/cart.svg'
import './style.scss'

export const Home: React.FC = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Layout>
      <div className="home">
        <section className="hero">
          <div className="container">
            <div className="hero-text">
              <h1>MarchéRunner</h1>
              <Text color="white">
                MarchéRunner is a web application for helping with your grocery
                runs.
              </Text>
              <Text color="white" variant="body-copy-small">
                Already have an account?{' '}
                <Button
                  className="hero-signin-link"
                  label="Sign In"
                  onClick={loginWithRedirect}
                  plain
                />
              </Text>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="about-flex-container">
              <div className="about-flex-container-left">
                <h3 className="about-title">How it works...</h3>
                <Text className="about-text" variant="body-copy-xlarge">
                  A super simple web application for all your grocery shopping
                  needs. Write your list, head off on your shopping trip, and
                  start over again.
                </Text>
                <Text className="about-text" variant="body-copy-xlarge">
                  Items are separated into categories to make your shopping
                  trips easier. There&apos;s lots of future plans with continous
                  updates to improve MarchéRunner and expand on its features.
                </Text>
              </div>
              <div className="about-screenshot">
                <img alt="MarchéRunner app screenshot" src={Screenshot} />
              </div>
            </div>
          </div>
        </section>

        <section className="steps">
          <div className="container">
            <h3 className="steps-title">Get running....</h3>
            <div className="steps-flex-container">
              <div className="steps-direction">
                <div className="steps-direction-image">
                  <Profile />
                </div>

                <Text align="center" className="steps-direction-text">
                  1. Login with a social media partner.
                </Text>
              </div>

              <div className="steps-direction">
                <div className="steps-direction-image">
                  <List />
                </div>
                <Text align="center" className="steps-direction-text">
                  2. Make your shopping list.
                </Text>
              </div>

              <div className="steps-direction">
                <div className="steps-direction-image">
                  <Cart />
                </div>
                <Text align="center" className="steps-direction-text">
                  3. Go shopping with MarchéRunner!
                </Text>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
