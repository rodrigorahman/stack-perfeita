import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { changeMenu } from '../core/actions/root.actions'
import './ConsultaCEP.css';
class ConsultaCEP extends React.Component {

    componentDidMount() {
        this.props.changeMenu('consulta')
    }

    render() {
        return (
            <div>
                <h1>Consulta CEP</h1>
                <br />
                <div class="wrap">
                    <div class="row">
                        <div className='right'>CEP:</div>
                        <div className='left'>
                            <div class="wrap">
                                <div class="row">
                                    <div className='left'>
                                        <input type='text' />
                                    </div>
                                    <div className='right'>
                                        <button>Buscar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>);
    }
}

const mapStateToProps = ({ root }) => {
    return { 
      ...root
    }
  };
  
const mapDispatchToProps = dispatch => {
    return {
        changeMenu: data => dispatch(changeMenu(data)),
    };
};

const enhance = compose(
    connect(mapStateToProps,mapDispatchToProps)
)

export default enhance(ConsultaCEP);