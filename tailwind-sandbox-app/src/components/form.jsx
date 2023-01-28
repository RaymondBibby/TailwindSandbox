import React from "react";

class Form extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = null;
        this.mounts = 0;
        this.unmounts = 0;
    }

    componentDidMount () {
        this.mounts ++;
        console.log('Mounts: ' + this.mounts);
    }

    componentWillUnmount () {
        console.log('Unmounts');
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log('You clicked Submit'); 
    }

    render () {
        return (
            <form className="flex justify-center" onSubmit={this.handleSubmit}>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;