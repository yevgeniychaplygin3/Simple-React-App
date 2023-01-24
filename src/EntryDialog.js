import React from 'react'


class EntryDialog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
    
    handleSubmit(prop){
        // event.preventDefault()
        console.log(prop)
        alert(`${prop.currentState.state.caption} ${prop.currentState.state.url}`)
    }


    render(){
        return (
            <div className='dialog'>
                <form onSubmit={(e) => {e.preventDefault(); this.handleSubmit(this.props)}}>
                    <h1>hello from the entry dialog</h1>
                    <input placeholder="enter url" onChange={this.props.currentState.handleURLChange}></input>
                    <br/>
                    <input placeholder="enter caption"  onChange={this.props.currentState.handleCaptionChange}></input>
                    <br/>
                    <button type='submit'>Accept</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        {this.props.currentState.closeDialog()}
                        }}>
                            Cancel
                    </button>
                </form>

                {/* <button onClick={this.printfunc}>printfunc</button> */}
            </div>
        )
    }
    
}

export default EntryDialog
