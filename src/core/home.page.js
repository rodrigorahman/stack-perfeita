import React, { Component } from 'react'
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { changeMenu } from '../core/actions/root.actions';

class HomePage extends Component {

    componentDidMount() {
        this.props.changeMenu('home');
    }

    render() {
        return (
            <div>
                <h1>HOME</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {...state.root}
}

const mapDispatchToProps = dispatch => {
    return {
        changeMenu: data => dispatch(changeMenu(data)),
    };
};


const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
)
export default enhance(HomePage);