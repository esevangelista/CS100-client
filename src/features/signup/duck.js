// Action Types
// const FEATURE = 'DOMAIN/FEATURE';
// Example: const LOGIN = 'AUTH/LOGIN';

const FORMCHANGE = 'FORM_CHANGE';
const RESETFORM = 'FORM_RESET';
const UPLOADPICTURE = 'UPLOAD_PICTURE';
const SUBMITFORM = 'FORM_SUBMIT';

// Action Creators
// Examples:
// Action Creators with redux-pack and thunk
// export const login = credentials => {
//   return dispatch => { // dispatch provided by thunk middleware
//     return dispatch({
//       type: LOGIN,
//       promise: Api.Login(credentials) // with redux-pack
//     });
//   }
// };

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
        type: RESETFORM,
        payload: {
            
        }
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
        type: SUBMITFORM,
        payload: {
        }
    }
}

// Initial State
const initialState = {

    form: {
        firstName: "",
        middleName: "",
        lastName: "",
        fullName: "",
        email: "",
        about: "",
        password: "",
        repassword: "",
        pictureLocation: ""
    }

}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(state);
    switch (type) {
        case FORMCHANGE:
        return {
            ...state,
            form: {
                ...state.form,
                [payload.name]: payload.value,
                fullName: state.form.firstName + " " + state.form.middleName + " " + state.form.lastName,
            }
        }
        case RESETFORM:
            return {
                form: { 
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    email: "",
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