import React, { useRef, useContext, useEffect, useState } from 'react'
import { Context } from '../../context/context'
import Card from '../../components/Card/Card'
import StyledHome from './Home.styled'
import StyledHomeDetails from './HomeDetails.styled'
import Viewdetailes from '../../components/Viewdetailes/Viewdetailes'
import Videogrid from '../../components/Videogrid/Videogrid'

const HomePage = React.memo(() => {
  const { state, dispatch } = useContext(Context)
  const [view, setView] = useState(null)
  const [arrCards, setArrCards] = useState([])
  const [selectedCard, setSelectedCard] = useState(null)
  const sectionRef = useRef(null)

  const getDetails = (element) => {
    const cardObj = {}
    cardObj.id = element.id.videoId
    cardObj.title = element.snippet.title
    cardObj.description = element.snippet.description
    cardObj.url = element.snippet.thumbnails.medium.url
    cardObj.width = element.snippet.thumbnails.medium.width
    cardObj.height = element.snippet.thumbnails.medium.height
    return cardObj
  }

  useEffect(() => {
    const defRows = []
    if (selectedCard) {
      defRows.push(
        <StyledHomeDetails key="homeDetails">
          <Viewdetailes
            id={selectedCard.id}
            key={`details_${selectedCard.id}`}
            title={selectedCard.title}
            description={selectedCard.description}
          />
          <Videogrid id={selectedCard.id} key={`grid_${selectedCard.id}`}>
            {arrCards}
          </Videogrid>
        </StyledHomeDetails>
      )
      dispatch({ type: 'SET_VIEW', payload: 'homeDetails' })
      setView(defRows)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCard])

  useEffect(() => {
    const getHome = () => {
      const rows = []
      const arr = state.data
      arr.slice(1).forEach((element) => {
        const updElement = getDetails(element)

        rows.push(
          <Card
            detailed
            id={updElement.id}
            key={updElement.id}
            title={updElement.title}
            description={updElement.description}
            link={updElement.url}
            w={updElement.width}
            h={updElement.height}
            customClickEvent={() => {
              setSelectedCard(updElement)
            }}
          />
        )
      })

      const defRows = (
        <StyledHome key="home" ref={sectionRef}>
          {rows}
        </StyledHome>
      )
      setView(defRows)
      setArrCards(rows)
    }
    const getFavorites = () => setView(<div />)
    if (state.data.length) {
      if (state.view === 'home') getHome()
      if (state.view === 'favorites') getFavorites()
    }
  }, [state.data, state.view])

  return <>{view}</>
})

export default HomePage
