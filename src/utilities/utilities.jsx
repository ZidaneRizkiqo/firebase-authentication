import { toast, Bounce } from "react-toastify";


export function showError(message){
    toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
    })
}
export function showSuccess(message){
    toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
    })
}
export function isValidEmail(email) {
    // Improved regular expression for email validation
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

export function isPasswordValid(password) {
    const minLength = 6;
    const maxLength = 16;
    const lengthCheck = password.length >= minLength && password.length <= maxLength;
    const upperCaseCheck = /[A-Z]/.test(password);
    const lowerCaseCheck = /[a-z]/.test(password);
    const numberCheck = /[0-9]/.test(password);
    
    if (!lengthCheck) {
        if (password.length < minLength) {
            return {
                status: false,
                message: "Password is too short. Minimum length is 8 characters."
            };
        }
        if (password.length > maxLength) {
            return {
                status: false,
                message: "Password is too long. Maximum length is 16 characters."
            };
        }
    }

    let missingCriteria = [];
    if (!upperCaseCheck) {
        missingCriteria.push("one uppercase letter");
    }
    if (!lowerCaseCheck) {
        missingCriteria.push("one lowercase letter");
    }
    if (!numberCheck) {
        missingCriteria.push("one number");
    }

    if (missingCriteria.length > 0) {
        return {
            status: false,
            message: `Password must contain at least ${missingCriteria.join(", ")}.`
        };
    }

    return {
        status: true,
        message: "Password is valid."
    };
}

