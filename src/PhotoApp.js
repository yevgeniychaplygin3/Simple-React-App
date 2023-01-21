import React from 'react'
import Dialog from './EntryDialog'
import Pictures from './PicturesList'

function App(props){
    return (
        <div>
            <button>Open photo entry dialog</button>
            <br/>
                <Dialog/>
                <Pictures/>
        </div>
    )
}

export default App