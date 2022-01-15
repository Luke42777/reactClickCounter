class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result

    }

    handleMathClick(type,number = 1){
        
        if(type === "add"){
        
            this.setState((prevState) => (
                {
                   count: prevState.count + 1,
                   result: prevState.result + number
                }
            ))

        }
        else if(type === "sub"){
            this.setState((prevState) => (
                {
                   count: prevState.count + 1,
                   result: prevState.result - 1
                }
            ))

        }
        else{
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
                <button onClick={() => this.handleMathClick("add")}>+1</button>
                <button onClick={() => this.handleMathClick("sub")}>-1</button>
                <button onClick={() => this.handleMathClick("clear")}>Reset</button>
                <button onClick={() => this.handleMathClick("add",100)}>+100</button>
                <h1>Click counter: {this.state.count}</h1>
                <h1>Result: {this.state.result}</h1>
            </>
        )
    }
}


ReactDOM.render(<React.StrictMode><Counter result={1000} /></React.StrictMode>, document.getElementById("root"))