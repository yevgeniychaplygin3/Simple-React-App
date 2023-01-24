import React from 'react'

const images = {
    url0: ''
}


const captions = {
    caption0: ''
} 


class Pictures extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className='pictures'>
                <h1>hello from pictures</h1>
                <img src='https://th.bing.com/th/id/OIP.49CH_m8xcY3b6stGkMkG2AHaEO?pid=ImgDet&rs=1'/>
                <p>caption</p>
            </div>
            )
    }

}

export default Pictures
