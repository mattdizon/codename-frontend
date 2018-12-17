import React from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

class Card extends React.Component{

    state = {
        isFront: true,
        bgColor: ""

    }

    clickHandler = () =>{
        this.setState({isFront: !this.state.isFront})
        this.setState({bgColor:this.props.color})
    }
    faceHandler = () => {
        if (this.state.isFront === true){
            return <CardFront front = {this.props.word}/>
        }
        else{
            return <CardBack color = {this.props.color} />
        }
    }


    render(){

        return(
            <div className = "wordCard" onClick = {this.clickHandler}  style={{backgroundColor: this.state.bgColor}}>
                {this.faceHandler()}
            </div>
        )

    }

}
export default Card;
