import { handle } from 'redux-pack';
import * as Api from '../../api';
import profpic from '../../assets/profpics/defaultLul.jpg';

const FORMCHANGE = 'SIGNUP/FORM_CHANGE';
const RESETFORM = 'SIGNUP/FORM_RESET';
const UPLOADPICTURE = 'SIGNUP/UPLOAD_PICTURE';
const SUBMITFORM = 'SIGNUP/FORM_SUBMIT';
const SIGNUP = '/SIGNUP/SIGNUP';

export const handleFormChange = (name, value) => {
    return {
        type: FORMCHANGE,
        payload: {
            name,
            value
        }
    }
}

export const handleResetForm = () => {
    return {
        type: RESETFORM
    }
}

export const handleUploadPicture = (name, value) => {
    return {
        type: UPLOADPICTURE,
        payload: {
            name,
            value
        }
    }
}

export const handleSubmitForm = () => {
    return{ 
        type: SUBMITFORM
    }
}

export const signup = credentials => {
  return dispatch => {
    return dispatch({
      type: SIGNUP,
      promise: Api.signup(credentials)
    });
  };
};

// Initial State
const initialState = {

    form: {
        firstName: "",
        middleName: "",
        lastName: "",
        name: "",
        email: "",
        about: "",
        password: "",
        repassword: "",
        imageUrl: profpic
    }

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case FORMCHANGE:
        return {
            ...state,
            form: {
                ...state.form,
                [payload.name]: payload.value,
                name: state.form.firstName + " " + state.form.middleName + " " + state.form.lastName,
            }
        }
        case RESETFORM:
            return {
                form: { 
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
                    about: "",
                    password: "",
                    repassword: ""
                }
            }
        case UPLOADPICTURE:
            return {
                ...state,
                form: {
                    [payload.name]: payload.value,
                }
            }
        case SUBMITFORM:
            console.log(state);
            return {
                ...state,
                form: {
                    [payload.name]: payload.value,
                }
            }
        default:
            return state;
    }
}

export default reducer;