import React, { Component } from 'react';

class InputTodo extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        this.setState({
            title: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        })
    };
    
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.onChange} type="text" placeholder="Add Todo..." value={this.state.title} />
                <button>Submit</button>
            </form>
          );
    }
}
 
export default InputTodo;