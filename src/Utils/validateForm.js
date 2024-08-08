export const validateData = (name, email, password)=>{

    if(name){
        const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
        if(!isNameValid) return "Name is Invalid";
    }

    
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    
    if(!isEmailValid) return "Email is Invalid";
    if(!isPasswordValid) return "Password is Invalid";

    return null;
};