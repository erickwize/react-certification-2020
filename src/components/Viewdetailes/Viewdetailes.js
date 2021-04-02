import React, { useContext } from 'react'
import StyledViewdetailes from './Viewdetailes.styled'
import { Context } from '../../context/context'

const Viewdetailes = React.memo(({ id, title, description }) => {
  const { state } = useContext(Context)
  return (
    <StyledViewdetailes toggle={state.theme}>
      <iframe
        className="iframe"
        key={`${id}iframe`}
        title={title}
        width="100%"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
      />
      <div className="iframeTitle">{title}</div>
      <div className="iframeDescription">{description}</div>
    </StyledViewdetailes>
  )
})

export default Viewdetailes
