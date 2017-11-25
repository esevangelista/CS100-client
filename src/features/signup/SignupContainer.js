import { connect } from 'react-redux';
import Signup from './Signup';
import { handleFormChange, handleResetForm } from './duck';


const mapStateToProps = state => {
    const { form } = state.fields
    return {
        form
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleFormChange: (name, value) => {
            dispatch(handleFormChange(name, value))
        },
        handleResetForm: () => {
            dispatch(handleResetForm())
        }
    }
};

// Returns a function
const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default SignupContainer;