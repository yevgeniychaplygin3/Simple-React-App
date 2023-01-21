import React from 'react'


class EntryDialog extends React.Component{
    constructor(props){
        super(props)
        // this.state = {}
    }


    
    render(){
        return (
            <div className='dialog'>
                <form>
                    <h1>hello from the entry dialog</h1>
                    <input placeholder="enter url"></input>
                    <br/>
                    <input placeholder="enter caption"></input>
                    <br/>
                    <button>Accept</button>
                    <button>Cancel</button>
                </form>
            </div>
        )
    }
    
}

export default EntryDialog
