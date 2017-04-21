/**
 * Created by juliakim on 4/21/17.
 */
import React, {Component, PropTypes} from 'react';

class TextField extends Component {

    componentWillMount() {
        console.log("will mount");
    }

    componentDidMount() {
        console.log("did mount");
    }

    render() {
        return (
            <input type="text" placeholder={this.props.placeholder}/>
        )
    }
}


TextField.Prop
export default TextField;