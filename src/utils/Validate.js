export const checkValidation = (email, password) => {
    const isEmaiAddress = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
    const isPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if (!isEmaiAddress) return "Email Id is not valid.";
    if (!isPassword) return "Password is not Valid.";

    return null;
}
