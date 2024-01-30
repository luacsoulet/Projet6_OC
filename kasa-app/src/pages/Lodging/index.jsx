// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import LodgingData from '../../data/data.json'

function Lodging() {
  //   const { id: queryId } = useParams()
  const LogementData = LodgingData.find((el) => el.id === 'c67ab8a7')

  const {
    title,
    cover,
    description,
    rating,
    location,
    pictures,
    host,
    equipements,
    tags,
    id,
  } = LogementData

  return (
    <div className="logding">
      <Carrousel pictures={pictures} />
    </div>
  )
}

export default Lodging
