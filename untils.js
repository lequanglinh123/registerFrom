export function getDataFromDoc(doc){
    const data = doc.data();
    data.id = doc.id;
    return data;
}
export function getDataFromDocs(res){
    return res.docs.map(getDataFromDoc);
}
export function mixData(firstName, lastName, email, password){
    const data = {
        Name: firstName + ' ' + lastName,
        Email: email,
        Password: password
    }
    return data;
}
export function addDataToDB(data){
    firebase.firestore().collection('users').add(data);
}
export function checkValidPassword(password){
    if(password.length < 3 || password.length >16){
        return false;
    }
    return true;
}
export function checkValidName(name){
    if(!name){
        return false;
    }
    return true;
}
export function checkValidEmail(email){
    if(!email.includes("@")){
        return false;
    }
    return true;
}
export function checkConfirmPassword(password, confirmPassword){
    if(!(password === confirmPassword)){
        return false;
    }
    return  true;
}