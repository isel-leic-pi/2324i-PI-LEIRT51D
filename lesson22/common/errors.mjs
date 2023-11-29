// Define all possible application errors

export const ERROR_CODES = {
    INVALID_ARGUMENT: 1,
    NOT_FOUND: 2,
    USER_NOT_FOUND: 3,
    FORBIDDEN: 4,
    MISSING_REQUIRED_ARGUMENT: 5,

}

export default {
    INVALID_ARGUMENT: argName => {
        return new Error(ERROR_CODES.INVALID_ARGUMENT, `Invalid argument ${argName}`)
    },
    NOT_FOUND: (what) => { 
        return new Error(ERROR_CODES.NOT_FOUND,`${what} not found`)
    },
    USER_NOT_FOUND: (what) => { 
        return new Error(ERROR_CODES.USER_NOT_FOUND,`User not found`)
    },
    NOT_AUTHORIZED: (who, what) => { 
        return new Error(ERROR_CODES.FORBIDDEN,`${who} has no access to ${what}`)
    },
    MISSING_REQUIRED_ARGUMENT: (argName) => { 
        return new Error(ERROR_CODES.MISSING_REQUIRED_ARGUMENT,`Missing required argument ${argName}`)
    },
}

function Error(code, description) {
    this.code = code
    this.description = description
}
