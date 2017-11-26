// Action Types
// const FEATURE = 'DOMAIN/FEATURE';
// Example: const LOGIN = 'AUTH/LOGIN';

const defaultPicture = 'routeToDefPic';

const FORMCHANGE = 'FORM_CHANGE';
const RESETFORM = 'FORM_RESET';
const UPLOADPICTURE = 'UPLOAD_PICTURE';
const SUBMITFORM = 'FORM_SUBMIT';

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

export const handleFileUpload = (name, value) => {
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
        name: "",
        email: "",
        about: "",
        password: "",
        repassword: "",
        image: "",
        currentImage: defaultPicture,
    }
}

const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log("EDIT: " + state);
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
                    name: "",
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

        default:
            return state;
    }
}

export default reducer;