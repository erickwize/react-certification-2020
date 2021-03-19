import React from 'react'
import StyledCard from './Card.styled'

const Card = ({ className, title, description, imageLink, width, height, dark }) => {
  return (
    <StyledCard className={className} imgLink={imageLink} toggle={dark}>
      <div className="card__image">
        <img
          className="imageInside"
          src={imageLink}
          alt={title}
          width={width}
          height={height}
        />
      </div>
      <div className="card__info">
        <div className="card__info__title">{title}</div>
        <div className="card__info__description"> {description}</div>
      </div>
    </StyledCard>
  )
}
export default Card
