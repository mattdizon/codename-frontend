import React from 'react'
import Card from '../component/Card'
export default class CardContainer extends React.Component{
    state = {
        cardAttributes: []
    }

    generateCard = () => {
        let i = 0
        return this.props.cards.map(word => {
            return <Cardword = {word.word} color = {this.props.colors[i++]}/>
        })
    }
    render(){
        this.generateCard()
        return (
            <div className = "container">
            {this.generateCard()}
            </div>
        )
    }
}
