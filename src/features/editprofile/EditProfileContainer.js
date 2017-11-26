import { connect } from 'react-redux';
import EditProfile from './EditProfile';
import { handleFormChange, handleResetForm, handleSubmitForm, handleFileUpload } from './duck';


const mapStateToProps = state => {
    const { user } = state.auth

    return {
        user
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
        handleFileUpload: (name, value) => {
            dispatch(handleFileUpload(name, value))
        },
        handleSubmitForm: () => {
            dispatch(handleSubmitForm())
        }
    }
};

// Returns a function
const EditProfileContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default EditProfileContainer;