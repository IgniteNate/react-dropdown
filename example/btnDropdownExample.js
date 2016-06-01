import React, { Component } from 'react'
import Dropdown from '../index.js'

const options = [
    'one', 'two', 'three'
]

class BtnDropdownExample extends Component {
    constructor (props) {
        super(props)
        this.state = {
            selected: options[0]
        }
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect (option) {
        console.log('You selected ', option.label)
        this.setState({selected: option})
    }

    render () {
        const defaultOption = this.state.selected
        const placeHolderValue = typeof this.state.selected === 'string' ? this.state.selected : this.state.selected.label

        return (
            <section>
                <h4>Button Dropdown Example </h4>
                <Dropdown options={options} changeStateOnSelect={false} onChange={this._onSelect} placeholder="Actions" />
                <div className='result'>
                    You selected
                    <strong> {placeHolderValue} </strong>
                </div>

                <section>
                    <h3>Options: </h3>
                    <div className='code'>
            <pre>
              {`
const options = [
  'one', 'two', 'three'
]
              `}
            </pre>
                    </div>
                </section>
            </section>
        )
    }
}

export default BtnDropdownExample