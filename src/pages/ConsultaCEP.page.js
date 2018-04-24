import React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { changeMenu } from '../core/actions/root.actions'
import './ConsultaCEP.css';
import withForm from '../core/hocs/withForm';


class ConsultaCEP extends React.Component {

    state = {
    }

    componentDidMount() {
        this.props.changeMenu('consulta')
    }

    // updateFormState = (event) => {
        
    //     const formstate = this.state.form || {};

    //     let form = {
    //         ...formstate,
    //         [event.target.name] : event.target.value
            
    //     }
    //     this.setState((state) => {
    //         return {
    //             ...state,
    //             form
    //         };
    //     })
    // }

    findCep = (e) => {
        e.preventDefault();
        console.log(this.props.form.testeForm);
        
    }


    render() {
        return (
            <div>
                <h1>Consulta CEP</h1>
                <br />
                <form name='testeForm' onSubmit="">
                    <div class="wrap">
                        <div class="row">
                            <div className='right'>CEP:</div>
                            <div className='left'>
                                <div class="wrap">
                                    <div class="row">
                                        <div className='left'>
                                            <input type='text' name='cep' onChange={this.props.updateFormState} />
                                            <input type='text' name='cep2' onChange={this.props.updateFormState} />
                                        </div>
                                        <div className='right'>
                                            <button onClick={this.findCep}>Buscar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
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
    connect(mapStateToProps,mapDispatchToProps),
    withForm
)

export default enhance(ConsultaCEP);