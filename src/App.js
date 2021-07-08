import React, {useState, useEffect} from 'react'
import './App.scss'
import axios from 'axios'
import Card from './components/Card'

export default function App(){
  const [data, setData] = useState([])
  const [error, setError] = useState('')


  useEffect(()=>{
    axios.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then(result => {
      console.log(result.data)
      setData(result.data)
    })
    .catch(error => {
      setError(error)
    })
  }, [])


  let cards
  if(data.length){
    cards = data.map((element)=>{
      return (<Card post={element}/>)
    })
  }

  return data.length ? (
    <div className="App row">
      {cards}
    </div>
  ) : (
    <div>
      <p>{error}</p>
    </div>
  )
}
