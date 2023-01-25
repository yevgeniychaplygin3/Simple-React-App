import React from 'react'
import EntryDialog from './EntryDialog'
import Pictures from './PicturesList'

const images = {
    url0: 'https://th.bing.com/th/id/OIP.49CH_m8xcY3b6stGkMkG2AHaEO?pid=ImgDet&rs=1',
    url1: 'https://th.bing.com/th/id/OIP.aQFbvUUdsl1hfZYF1XmUqwHaE8?pid=ImgDet&rs=1'
}


const captions = {
    caption0: 'hi',
    caption1: 'world'
} 

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            // dialogopen: false,
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
        // console.log(this.state.open == this.state.dialogopen)
        // this.setState(previousState => ({open: !previousState.open}))
        this.setState((e) => e.open = true)
        // this.setState(oldstate => ({open: !oldstate.open}))
    }

    closeDialog(){
        // console.log(`close: ${this.state.dialogopen}`)
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
        // console.log(`==caption ${this.state.caption}, ${this.state.url}`);
        // this.setState({pictureUrl: this.state.url})
        // this.setState({pictureCaption: this.state.caption})
        this.counter = this.updateCounter()
        images[this.counter] = this.state.url
        captions[this.counter] = this.state.caption
        console.log(images)
        console.log(captions)
        this.closeDialog()
        // console.log(`==pictureschange ${this.state.pictureUrl}, ${this.state.pictureCaption}`);
    }

    handleDeletion(key){
        delete images[key]
        console.log(images)
        this.setState({pictureCaption: key})
        // this.closeDialog()
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
                {/* <Pictures 
                    options={captions}
                    value={this.state.pictureCaption}
                    handleChange={this.handlePicturesChange}/> */}
            </div>
            </>
        )
    }
}

export default App