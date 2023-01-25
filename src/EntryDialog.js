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
        if(prop.currentState.state.caption === '' || prop.currentState.state.url === ''){
            this.setState( (e) => e.empty = true)
        }
        else{
            return (
                prop.currentState.handlePicturesChange()
                )
        }
    }


    render(){
        return (
            <div className='dialog'>
                <form onSubmit={(e) => {e.preventDefault(); this.handleSubmit(this.props)}}>
                    <input placeholder="enter url" onChange={this.props.currentState.handleURLChange} ></input>
                    <br/>
                    <input placeholder="enter caption"  onChange={this.props.currentState.handleCaptionChange} ></input>
                    <br/>
                    <button type='submit'>Accept</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        this.props.currentState.closeDialog()
                        }}>
                            Cancel
                    </button>
                    <div>
                        {this.state.empty ? <p className='dialogError'>You must enter both a URL and a caption</p> : ''}
                    </div>
                </form>
            </div>
        )
    }
    
}

export default EntryDialog
