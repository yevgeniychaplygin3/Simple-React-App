import React from 'react'
import EntryDialog from './EntryDialog'
import Pictures from './PicturesList'



class Dialog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
        
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
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
                <button onClick={this.openDialog}>
                    Open Dialog Entry
                </button>
                    <div>
                        {this.state.open ?  <EntryDialog closeDialog={this.closeDialog}/> : ''}
                    </div>
            </>
        )
    }
}




function App(props){
    return (
        <div>
            <Dialog/> 
            <br/>
            {/* <EntryDialog/> */}
            <Pictures/>
        </div>
    )
}

export default App