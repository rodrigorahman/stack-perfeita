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

                if(this.state) console.log("tem essa porra");
                const formstate = this.state.form || {};

                let form = {
                    ...formstate,
                    [event.target.name]: event.target.value

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