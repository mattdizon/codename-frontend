import React from 'react'

export default class MapTile extends React.Component{
    state ={
        bgColor: this.props.color
    }
    render(){
    
        return (
            <div className = "minimapElement"  style={{backgroundColor: this.state.bgColor}}>

            </div>

        )
    }
}
