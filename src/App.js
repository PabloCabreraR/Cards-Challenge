import React from 'react'
import './App.scss'
import axios from 'axios'
import Card from './components/Card'

export default class App extends React.Component{

  state = {
    data: [],
    error: ""
  }

  componentDidMount(){
    axios.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
    .then(result => {
      this.setState({...this.state, data: result.data})
    })
    .catch(error => {
      this.setState({...this.state, error})
    })
  }

  dataMapped(data){
    return data.map((element)=>{
      return (<Card post={element}/>)
    })
  }


  render(){
    let cards
    if(this.state.data){
      cards = this.dataMapped(this.state.data)
    }

    return (
      <div className="App row">
        {cards}
      </div>
    )
  }
}