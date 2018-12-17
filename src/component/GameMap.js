import React from 'react'
import MapTile from './MapTile'
export default class GameMap extends React.Component{

    state ={
        showMap: false
    }

    generateMapTiles =()=>{
        let i = 0
        return this.props.colors.map(color =>{
            return <MapTile key = {i++} color={color}/>

        })
    }
    clickHandler = () =>{
        this.setState({showMap: !this.state.showMap})
    }
    showMap = () =>{
        if (this.state.showMap === true){
            return ( <div className = "minimapContainer" onClick = {this.clickHandler}>
                    {this.generateMapTiles()}
                    </div>
            )
        }
        else{
            return (
                <div className = "showMapButton" >
                <button onClick = {this.clickHandler}>Show Map </button>
                </div>
            )
        }
    }
    render(){


        return (
            this.showMap()
        )
    }
}
