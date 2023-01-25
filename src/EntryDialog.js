import React from 'react'


class EntryDialog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            empty: false
        }
    this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
    
    handleSubmit(prop){
        // event.preventDefault()
        // console.log(prop)
        // console.log(`${prop.currentState.state.caption} ${prop.currentState.state.url}`)
        if(prop.currentState.state.caption == '' || prop.currentState.state.url == ''){
            console.log('cannot be empty')
            this.setState( (e) => e.empty = true)
        }
        else{
            return (prop.currentState.closeDialog())
        }
    }


    render(){
        return (
            <div className='dialog'>
                <form onSubmit={(e) => {e.preventDefault(); this.handleSubmit(this.props)}}>
                    <h1>hello from the entry dialog</h1>
                    <input placeholder="enter url" onChange={this.props.currentState.handleURLChange} ></input>
                    <br/>
                    <input placeholder="enter caption"  onChange={this.props.currentState.handleCaptionChange} ></input>
                    <br/>
                    <button type='submit'>Accept</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        {this.props.currentState.closeDialog()}
                        }}>
                            Cancel
                    </button>
                    <div className=''>
                        {/* {this.state.empty ? 'You must enter both a URL and a caption' : ''} */}
                        {this.state.empty ? <p className='dialogError'>You must enter both a URL and a caption</p> : ''}
                    </div>
                </form>

                {/* <button onClick={this.printfunc}>printfunc</button> */}
            </div>
        )
    }
    
}

export default EntryDialog
