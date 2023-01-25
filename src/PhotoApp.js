import React from 'react'
import EntryDialog from './EntryDialog'
import Pictures from './PicturesList'

const images = {
}

const captions = {
} 

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            url: '', 
            caption: '',
            pictureUrl: Object.keys(images)[0],
            pictureCaption: Object.keys(captions)[0]
        }
        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
        this.handleURLChange = this.handleURLChange.bind(this)
        this.handleCaptionChange = this.handleCaptionChange.bind(this)
        this.handleDeletion = this.handleDeletion.bind(this)


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
        this.setState((e) => e.open = true)
    }

    closeDialog(){
        this.setState((e) => e.open = false)
        this.setState( (e) => e.url = '')
        this.setState( (e) => e.caption = '')
    }

    updateCounter(){
        if (typeof this.updateCounter.counter == 'undefined'){
            this.updateCounter.counter = 0;
        }
        this.updateCounter.counter++;
        return this.updateCounter.counter
    }

    handlePicturesChange(){
        this.counter = this.updateCounter()
        images[this.counter] = this.state.url
        captions[this.counter] = this.state.caption
        this.closeDialog()
    }

    handleDeletion(key){
        delete images[key]
        this.setState({pictureCaption: key})
    }


    
    render(){
        return (
            <>

            <div>
                <button onClick={this.openDialog}>
                    Open Dialog Entry
                </button>
                <br/>
                <div>
                    {this.state.open ?  <EntryDialog currentState={this}/> : '' }
                </div>
                <Pictures 
                    img={images}
                    cpt={captions}
                    handleDeletionChange={this.handleDeletion}
                    />
            </div>
            </>
        )
    }
}

export default App