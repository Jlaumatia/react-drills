import React, {Component} from 'react'

class NewTask extends Components {
    constructor() {
        super()
        this.state = {
            input:""
        };

        this.newAdd = this.newAdd.bind(this);

    
    }

    handleInputChange(value) {
        this.setState({ input: value });
    }

    newAdd() {
        this.props.add(this.state.input);
        this.setState({input: ""});
    }
    

    render() {
        return (
            <div>
                <input value={this.state.input} placeholder="Enter new Task" onChange={e => this.handleInputChange(e.target.value)} />

                <button onClick={this.newAdd}>Add></button>
            </div>

        )
    }

}

export default NewTask;