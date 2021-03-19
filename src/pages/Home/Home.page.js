import React, { useRef, useContext } from 'react'
import { Context } from '../../context/context'
import Card from '../../components/Card/Card'
// import { Link, useHistory } from 'react-router-dom'
// import { useAuth } from '../../providers/Auth'
import StyledHomepage from './Home.styled'

function HomePage() {
  const { videoItems, dark } = useContext(Context)
  // const history = useHistory()
  const sectionRef = useRef(null)
  // const { authenticated, logout } = useAuth()

  // function deAuthenticate(event) {
  //   event.preventDefault()
  //   logout()
  //   history.push('/')
  // }
  const getVideoItems = () => {
    const rows = []
    let element = {}
    let elementTitle = ''

    if (videoItems.length) {
      // eslint-disable-next-line no-plusplus
      for (let i = 1; i < videoItems.length; i++) {
        element = videoItems[i]
        elementTitle = element.snippet.title.replace(/[^a-zA-Z0-9 |]/g, '')

        rows.push(
          <Card
            className={`card${i}`}
            key={`card${i}`}
            title={elementTitle}
            description={element.snippet.description}
            imageLink={element.snippet.thumbnails.medium.url}
            w={element.snippet.thumbnails.medium.width}
            h={element.snippet.thumbnails.medium.height}
            dark={dark}
          />
        )
      }
    }
    return rows
  }

  return (
    <StyledHomepage ref={sectionRef}>{getVideoItems()}</StyledHomepage>

    /* <h1>Hello stranger!</h1>
      {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )} */
    // </section>
  )
}

export default HomePage
