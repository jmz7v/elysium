import React from 'react'

class Input extends React.Component {
  state = {
    value: ''
  }

  setValue = e => {
    this.setState({value: e.currentTarget.value})
  }

  render () {
    const { value } = this.state
    return (
      <input
        className="input"
        type="text"
        placeholder="Text input"
        value={value}
        onChange={this.setValue}
      />
    )
  }
}

export default Input