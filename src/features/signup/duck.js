import { handle } from 'redux-pack';
import * as Api from '../../api';
import profpic from '../../assets/profpics/defaultLul.jpg';

const FORMCHANGE = 'SIGNUP/FORM_CHANGE';
const RESETFORM = 'SIGNUP/FORM_RESET';
const UPLOADPICTURE = 'SIGNUP/UPLOAD_PICTURE';
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

export const handleUploadPicture = file => {
    return {
        type: UPLOADPICTURE,
        payload: file
    };
};

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
        repassword: ""
    },
    isSigningUp: false,
    //imagePath: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGNUP:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isSigningUp: true
                }),
                success: prevState => ({
                    ...prevState,
                    form: initialState.form
                }),
                finish: prevState => ({
                    ...prevState,
                    isSigningUp: false
                })
            })
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
        // case UPLOADPICTURE:
        //     return {
        //         ...state,
        //         imagePath: payload.name
        //     }
        default:
            return state;
    }
}

export default reducer;