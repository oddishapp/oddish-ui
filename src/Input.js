import React, { Component } from 'react'
import 'emoji-mart/css/emoji-mart.css'
import './Input.css'
import { Picker } from 'emoji-mart'

class Input extends Component {
    state = {
        emojis: []
    }

    addEmoji = (emoji) => {
        const { emojis: old } = this.state
        if (old.length <= 21) {
            const emojis = [...old, emoji]
            this.setState({emojis})
        }
    }

    clearEmojis = () => this.setState({ emojis: [] })

    submitEmojis = () => {
        this.clearEmojis()
    }

    render() {
        const { emojis } = this.state

        return (
            <div>
                <div className="emoji-input">
                    <p>{emojis.map(e => e.native)}</p>
                </div>
                <div>
                    <button onClick={this.clearEmojis}>Clear</button>
                    <button onClick={this.submitEmojis}>Submit</button>
                </div>
                <Picker
                    set='emojione'
                    onSelect={this.addEmoji}
                    title='Pick your emoji...'
                    emoji='point_up'
                    style={{ position: 'absolute', bottom: '20px', right: '20px' }}
                />
            </div>
        )
    }
}

export default Input