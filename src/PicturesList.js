import React from 'react'


class Pictures extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.updateCounter = this.updateCounter.bind(this)
    }

    updateCounter(){
        this.setState({counter : this.state.counter += 1})
        return this.state.counter
    }
    

    render(){
        return(
            <div className='leftSide'>
                 {Object.keys(this.props.img).map(key => (
                    <span className='pictures'>
                        <img key={key} src={this.props.img[key]}/>
                        <p>{this.props.cpt[key]}</p>
                    </span>
                  )).reverse()}  
                
                {/* <img src='https://th.bing.com/th/id/OIP.49CH_m8xcY3b6stGkMkG2AHaEO?pid=ImgDet&rs=1'/> */}
                {/* <p>caption</p> */}
                
            </div>
            )
    }

}

export default Pictures

