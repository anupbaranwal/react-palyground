import React from "react";

class ClassComponentExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          index: 0,
        };
        this.clickHandler = this.clickHandler.bind(this);
    }
    

    clickHandler(arg) {
        this.setState((s, p) => {
            return {
                index: s.index + arg,
            };
        });
    }

    componentDidMount() {
        console.log("component got mount");
    }

    componentDidUpdate() {
        console.log("component got updated");
    }

    componentWillUnmount() {
        console.log("component got unmounted");
    }
    

    render() {
        return (
            <>
              <h3>Sample: Class Component: {this.state.index}</h3>
              <button
                className="btn btn-warning"
                onClick={() => this.clickHandler(9)}
              >
                Increment
              </button>
        </>);
    }
}

export default ClassComponentExample;