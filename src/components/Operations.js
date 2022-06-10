import React from "react"

export default class Operations extends React.Component {

    state = {
        operationsValues: [
            { Status: false, Formula: 3 },
            { Status: false, Formula: 3 },
            { Status: false, Formula: 3 },
            { Status: false, Formula: 3 },
            { Status: false, Formula: 3 },
        ]
    }

    enableModalOperation = () => {
        const { optionId } = this.props
        this.setState((prevState) => {
            prevState.operationsValues[optionId].Status = true
        })
    }

    showOperations = () => {
        const { operationsValues } = this.state
        const activeOperations = operationsValues.filter(item => {
            if (item.Status) {
                return true
            }
        })
        return activeOperations.map( item => (
            <p>{item.Formula}</p>
        ))
    }

    componentDidUpdate() {
        this.enableModalOperation()
        this.showOperations()
    }

    render() {
        console.log(this.state.operationsValues)
        return (
            <div>
            {this.showOperations()}
            </div>
        )
    }
}