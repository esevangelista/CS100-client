import { connect } from 'react-redux';
import EditProfile from './EditProfile';
import { verify, handleEditForm, resetOldPassword } from './duck';


const mapStateToProps = state => {
    const { user } = state.auth;
    const { validOldPassword } = state.editprofile
    return {
        user,
        validOldPassword,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleVerify: (credentials) => {
            dispatch(verify(credentials))
        },
        handleEditForm: (credentials) => {
            dispatch(handleEditForm(credentials))
        },
        resetOldPassword: () => {
            dispatch(resetOldPassword())
        }
    }
};

// Returns a function
const EditProfileContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfile);

export default EditProfileContainer;