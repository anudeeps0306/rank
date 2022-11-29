import React from 'react'

const Card = (props) => {
  return (
    <>  
        <img src={props.titlePhoto}></img>
        <div>{props.firstName}</div>
        <div>{props.lastName}</div>
        <div>{props.rating}</div>
    </>
  )
}

export default Card