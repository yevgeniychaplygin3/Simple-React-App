import React from 'react'


class EntryDialog extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            url: '', 
            caption: ''
        }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleURLChange = this.handleURLChange.bind(this)
    this.handleCaptionChange = this.handleCaptionChange.bind(this)
    }
    
    handleURLChange(event){
        event.preventDefault()
        this.setState({url: event.target.value})
    }
    handleCaptionChange(event){
        event.preventDefault()
        this.setState({caption: event.target.value})
    }
    
    handleSubmit(event){
        event.preventDefault()
        alert(`${this.state.caption} ${this.state.url}`)
    }


    render(){
        return (
            <div className='dialog'>
                <form onSubmit={this.handleSubmit}>
                    <h1>hello from the entry dialog</h1>
                    <input placeholder="enter url"  onChange={this.handleURLChange} ></input>
                    <br/>
                    <input placeholder="enter caption" onChange={this.handleCaptionChange}></input>
                    <br/>
                    <button type='submit'>Accept</button>
                    <button onClick={(e) => {
                        e.preventDefault()
                        {this.props.closeDialog()}
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
