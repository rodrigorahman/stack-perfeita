import React from 'react';

function withForm(WrappedComponent) {
    return (
        class withFormHoc extends React.Component {
            
            constructor(props){
                super(props)
                this.state = {
                    form: {}
                }
            }
            
            updateFormState = (event) => {
                console.log(this.state[event.target.form.name]);
                let form = {
                    ...this.state.form,
                    [event.target.form.name]: {
                        ...this.state.form[event.target.form.name],
                        [event.target.name]: event.target.value
                    }                    

                }
                this.setState((state) => {
                    return {
                        ...state,
                        form
                    };
                })
            }

            render() {
                return (
                    <WrappedComponent
                        {...this.props}
                        updateFormState={this.updateFormState}
                        form={this.state.form}
                    />
                )
            }
        }
    );
}

export default withForm;