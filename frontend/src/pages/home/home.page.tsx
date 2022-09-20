import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Layout } from '../../layout'
import Screenshot from './assets/marcherunner-list.png'
import { ReactComponent as Profile } from './assets/profile.svg'
import { ReactComponent as List } from './assets/list.svg'
import { ReactComponent as Cart } from './assets/cart.svg'
import './style.scss'

export const Home: React.FC = () => {
  const { loginWithPopup } = useAuth0()

  return (
    <Layout>
      <div className="home">
        <section className="hero">
          <div className="container">
            <div className="hero-text">
              <h1>MarchéRunner</h1>
              <p>
                MarchéRunner is a web application for helping with your grocery
                runs.
              </p>
              <p className="hero-signin">
                Already have an account?{' '}
                <span className="hero-signin-link" onClick={loginWithPopup}>
                  Sign in
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="about-flex-container">
              <div className="about-flex-container-left">
                <h2 className="about-title">How it works...</h2>
                <p className="about-text">
                  A super simple web application for all your grocery shopping
                  needs. Write your list, head off on your shopping trip, and
                  start over again.
                </p>
                <p className="about-text">
                  Items are separated into categories to make your shopping
                  trips easier. There&apos;s lots of future plans with continous
                  updates to improve MarchéRunner and expand on its features.
                </p>
              </div>
              <div className="about-screenshot">
                <img alt="MarchéRunner app screenshot" src={Screenshot} />
              </div>
            </div>
          </div>
        </section>

        <section className="steps">
          <div className="container">
            <h2 className="steps-title">Get running....</h2>
            <div className="steps-flex-container">
              <div className="steps-direction">
                <div className="steps-direction-image">
                  <Profile />
                </div>

                <p className="steps-direction-text">1. Create a profile.</p>
              </div>

              <div className="steps-direction">
                <div className="steps-direction-image">
                  <List />
                </div>
                <p className="steps-direction-text">
                  2. Login and start making your shopping list.
                </p>
              </div>

              <div className="steps-direction">
                <div className="steps-direction-image">
                  <Cart />
                </div>
                <p className="steps-direction-text">
                  3. Go shopping with MarchéRunner!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
