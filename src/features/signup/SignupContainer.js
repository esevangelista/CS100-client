import { connect } from 'react-redux';
import Signup from './Signup';
import { handleFormChange, handleResetForm, handleUploadPicture, signup } from './duck';


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
        },
        handleUploadPicture: file => {
            dispatch(handleUploadPicture(file))
        },
        handleSignUp: credentials => {
            dispatch(signup(credentials))
        }
    }
};

const SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup);
export default SignupContainer;