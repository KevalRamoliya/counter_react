import React, { useState, useEffect } from 'react'
// const datai = parseInt(prompt("Enter increment number"));
// const datad = parseInt(prompt("Enter decrement number"));

function Add() {

    const initialDatai = 1;
    const initialDatad = 1;


    const [curdatai, setdatai] = useState(1)
    function incri() {
        setdatai(curdatai + 2);
    }


    const [curdatad, setdatad] = useState(2);
    function dencri() {
        setdatad(curdatad - 5)
    }

    function refresh() {
        setdatai(initialDatai);
        setdatad(initialDatad)
    }

    useEffect(() => {
        alert("hii")
    }, [curdatai])
    return (
        <React.Fragment>
            <h1>Counter Project</h1>
            <table style={{ padding: "100px", border: "5px solid #000" }}>

                <p style={{ display: "inline-block" }}>{curdatai}</p>


                <button onClick={incri} style={{ margin: "50px", padding: "5px" }}>Increment</button>

                <p>{curdatad}</p>

                <button onClick={dencri} style={{ margin: "50px", padding: "5px" }}>Decrement</button>

                <button onClick={refresh}>Refresh</button>

            </table>
        </React.Fragment>
    )

}


class Incr extends React.Component {
    constructor() {
        super();
        this.state = {
            incri: 1,
            decri: 1
        }
    }
    incri = () => {
        this.setState({
            incri: this.state.incri + 1
        })
    }
    decri = () => {
        this.setState({
            decri: this.state.decri - 1
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.incri}</h1>
                <button onClick={() => this.incri()}>Increment</button>
                <h1>{this.state.decri}</h1>
                <button onClick={() => this.decri()}>Decrement</button>
            </>
        )
    }
}
export { Add, Incr };