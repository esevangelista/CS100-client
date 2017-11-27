import * as Api from '../../api';
import { handle } from 'redux-pack';
// Action Types
// const FEATURE = 'DOMAIN/FEATURE';
// Example: const LOGIN = 'AUTH/LOGIN';


const defaultPicture = 'routeToDefPic';

const FORMCHANGE = 'FORM_CHANGE';
const RESETFORM = 'FORM_RESET';
const UPLOADPICTURE = 'UPLOAD_PICTURE';
const SUBMITFORM = 'FORM_SUBMIT';
const EDITPROFILE = 'EDIT_PROFILE';
const VERIFYPASSWORD = 'VERIFY_PASSWORD';
const RESETOLDPASSWORD = 'RESET_VALIDPASSWORD';

export const verify = (credentials) => {
  return dispatch => {
    return dispatch({
      type: VERIFYPASSWORD,
      promise: Api.verifyPassword(credentials)
    });
  };
};

export const handleEditForm = (credentials) => {
    return dispatch => {
        return dispatch({
            type: EDITPROFILE,
            promise: Api.editprofile(credentials)
        });
    };
};

export const resetOldPassword = () => {

    return {
        type: RESETOLDPASSWORD,
        payload: {

        }
    }
}

// Initial State
const initialState = {
    form:{
        name: "",
        email: "",
        password: "",
        about: "",
    },
    validOldPassword: null
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case VERIFYPASSWORD:
            return handle(state, action, {
                start: prevState => ({
                ...prevState,
                }),
                success: prevState => ({
                ...prevState,
                validOldPassword: true
                }),
                failure: prevState => ({
                ...prevState,
                validOldPassword: false,
                }),
                finish: prevState => ({
                ...prevState,
                })
            })
            
        case EDITPROFILE:
            return handle(state, action, {
                start: prevState => ({
                    ...prevState,
                    isSigningUp: true
                }),
                success: prevState => ({
                    ...prevState,
                    form: payload.data.data,
                }),
                finish: prevState => ({
                    ...prevState,
                    isSigningUp: false
                })
            })

        case RESETOLDPASSWORD:
            return {
                ...state,
                validOldPassword: false
            }

        default:
            return state;
    }
}

export default reducer;