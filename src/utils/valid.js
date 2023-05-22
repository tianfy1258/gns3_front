import {useStore} from "../pinia";
const store = useStore();

export const isValid = (auth) => {
    let user = store.user;
    return auth.indexOf(user.user_auth) > -1;

}
