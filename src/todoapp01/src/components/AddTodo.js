import React from "react";

export class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "test" }
    }

    render() {
        return (
            <div>
                <h2>AddTodo</h2>
                <form>
                    <input value={this.state.title} onChange={this.handleChange} />
                    <input type="submit" value="Add to todo list" />
                </form>
            </div>
        );
    }

    handleChange = () => {
        alert("change");
    }
}