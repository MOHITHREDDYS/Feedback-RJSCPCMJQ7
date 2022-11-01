// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {flex: 'display1', none: 'display2'}

  onClickingEmoji = () => {
    this.setState({flex: 'display2', none: 'display1'})
  }

  render() {
    const {resources} = this.props
    const {flex, none} = this.state
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="main_container">
        <div className="container">
          <div className={flex}>
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
            <div className="emojis_container">
              {emojis.map(emoji => (
                <button
                  className="emoji_name_container"
                  onClick={this.onClickingEmoji}
                  type="button"
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                  />
                  <p>{emoji.name}</p>
                </button>
              ))}
            </div>
          </div>
          <div className={`${none} feedback_container`}>
            <img src={loveEmojiUrl} alt="love emoji" className="emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
