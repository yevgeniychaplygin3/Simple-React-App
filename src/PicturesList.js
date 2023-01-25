import React from 'react'


class Pictures extends React.Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.props.handleDeletionChange(event.target.value)
    }

    render(){
        return(
            <div className='leftSide'>
                 {Object.keys(this.props.img).map(key => (
                    <span className='pictures'>
                        <img key={key} src={this.props.img[key]}/>
                        <p className='caption'>{this.props.cpt[key]}</p>
                        <button className='btn' onClick={this.handleChange} value={key}>X</button>
                    </span>
                  )).reverse()}  
            </div>
            )
    }

}

export default Pictures

