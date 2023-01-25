import React from 'react'
import EntryDialog from './EntryDialog'
import Pictures from './PicturesList'



class Dialog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            url: '', 
            caption: ''
        }
        
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
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


    openDialog () {
        console.log(`open: ${this.state.open}`)
        // this.setState(previousState => ({open: !previousState.open}))
        this.setState((e) => e.open = true)
    }

    closeDialog(){
        console.log(`close: ${this.state.open}`)
        this.setState((e) => e.open = false)
    }
    


    

    render(){
        return(
            <>
                {/* <button onClick={this.openDialog}> */}
                    {/* Open Dialog Entry */}
                {/* </button> */}
                    {/* <div> */}
                        
                        {/* {this.state.open ?  <EntryDialog currentState={this}/> : ''} */}
                    {/* </div> */}
            </>
        )
    }
}




class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dialogopen: false,
            url: '', 
            caption: ''
        }
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
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
    

    openDialog () {
        // console.log(`open: ${this.state.dialogopen}`)
        // this.setState(previousState => ({open: !previousState.open}))
        this.setState((e) => e.open = true)
    }

    closeDialog(){
        // console.log(`close: ${this.state.dialogopen}`)
        this.setState((e) => e.open = false)
        this.setState( (e) => e.url = '')
        this.setState( (e) => e.caption = '')
    }


    
    render(){
        return (
            <div>
                <button onClick={this.openDialog}>
                    Open Dialog Entry
                </button>
                <br/>
                <div>
                    {/* { 
                        (
                            () => 
                            {
                                if (this.state.dialogopen)
                                {
                                    return <EntryDialog currentState={this}/>
                                }
                            }  
                        )
                    } */}
                    {this.state.open ?  <EntryDialog currentState={this}/> : '' }
                    {/* console.log(`==caption ${this.state.caption}, ${this.state.url}`)} */}

                </div>
                {/* <EntryDialog/> */}
                <Pictures/>
            </div>
        )
    }
}

export default App