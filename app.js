class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result

    }

    handleMathClick = (type, number = 1) => {
//debugger
        if (type === "add") {

            this.setState((prevState) => (
                {
                    count: prevState.count + 1,
                    result: prevState.result + number
                }
            ))

        }
        else if (type === "sub") {
            this.setState((prevState) => (
                {
                    count: prevState.count + 1,
                    result: prevState.result - 1
                }
            ))

        }
        else {
            this.setState((prevState) => (
                {
                    count: prevState.count + 1,
                    result: 0
                }
            ))

        }
    }
    render() {
        return (
            <>
                <MathButton
                    name="+1"
                    number="1"
                    type="add"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="-1"
                    number="1"
                    type="sub"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="Reset"
                    number="0"
                    type="clear"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="+100"
                    number="100"
                    type="add"
                    click={this.handleMathClick}
                />

                <DisplayPanel 
                counter={this.state.count}
                result={this.state.result}
                 />

            </>
        )
    }
}


const MathButton = (props) => {
    return(
        <button onClick={() => props.click(props.type,Number(props.number))}>{props.name}</button>
    )
}

const DisplayPanel = (props) => {
    return(
        <>
        <h1>Click counter: {props.counter} {(props.counter >= 10) ? <span>"Processor overheated!!"</span> : null} </h1>
        <h1>Result: {props.result}</h1>
        </>
    )
}

ReactDOM.render(<React.StrictMode><Counter result={1000} /></React.StrictMode>, document.getElementById("root"))