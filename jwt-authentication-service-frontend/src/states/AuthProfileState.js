import { atom } from "recoil";

// current user's profile

const authProfileState = atom({
    key: "authProfile",
    default: undefined
});

export default authProfileState;