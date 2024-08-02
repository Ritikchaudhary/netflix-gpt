export const validateData = (name, email, password)=>{

    const isNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    
    if(!isNameValid) return "Name is Invalid";
    if(!isEmailValid) return "Email is Invalid";
    if(!isPasswordValid) return "Password is Invalid";

    return null;
};