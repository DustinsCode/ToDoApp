export function requiredRule(message = 'This field is required'): (value: any) => boolean|string {
    return (value) => (!!value || value === 0) || message;
}

export function emailFormatRule(message = 'Must be a valid email'): (value: any) => boolean|string {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return (value) => (re.test(String(value).toLowerCase())) || message;
}

export function minPasswordLength(message = 'Min 8 characters'): (value: any) => boolean | string {
    return (value) => (value.length >= 8) || message;
}