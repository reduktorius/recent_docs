import React from 'react';
import RecentItemList from '../components/RecentItemList';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            recentFiles: []
        }
    }

    pushRecentFile(fileName) {
        let {recentFiles} = this.state;

        // Check if file already in the list
        recentFiles = recentFiles.filter(item => {
            if (item.file !== fileName) {
                return item;
            } else {
                return null;
            }
        })

        // Check if list not too long
        if (recentFiles.length >= this.props.historyLength) {
            recentFiles.pop()
        }

        // Put the most recent file on top
        this.setState({recentFiles: [{file: `${fileName}`}].concat(recentFiles)})
    }

    keyPressed = (event) => {
        if (event.key === "Enter"){
            this.pushRecentFile(event.target.value);
            event.target.value = '';
        }
    }

    render() {
        return (
            <div>
                <h1>{this.props.historyLength} most recent documents</h1>
                <div className="fl w-30">
                    Last open file: <input type="text" onKeyPress={this.keyPressed} placeholder="File.1"></input>
                </div>
                <div className="fl w-70">
                    <ul><RecentItemList files={this.state.recentFiles}/></ul>
                </div>
            </div>
        )
    }
}

export default App;
