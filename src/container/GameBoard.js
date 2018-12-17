import React from 'react'
import Map from '../component/GameMap'
import CardCollection from './CardContainer'


class GameBoard extends React.Component{

    state = {
        words: [],
        loading: true,
        bgColor: [
            'red','red','red','red','red','red','red','red',
            'blue','blue','blue','blue','blue','blue','blue','blue',
            'green','green','green','green','green','green','green','green',
            'black'
        ],
        newCollection: [],
        shuffledWords: []

    }

    componentDidMount() {
    fetch("https://codename-backend.herokuapp.com/cards/index")
      .then(response => response.json())
      .then(words => this.setState({words,loading:false}))
    }

    generateShuffledCards =() =>{
        let i = 0
        let wordArr = []
        this.state.words.sort(() => 0.5 - Math.random()).map(word => {
            while (i < 25){
                i++
                return (
                    wordArr.push(word)
                )
            }

        })

        return wordArr
    }

    componentWillMount(){
        let shuffle = require('shuffle-array')
        shuffle(this.state.bgColor)
    }



    render(){
        this.state.shuffledWords = this.generateShuffledCards()
        //need to setstate properly however newCollection is the randomized color array
        // in the state

     return (
         <div className = "container">
         <Map colors = {this.state.bgColor}/>
         <CardCollection cards = {this.state.shuffledWords} colors = {this.state.bgColor} />
         </div>
     )



  }
}
export default GameBoard;
