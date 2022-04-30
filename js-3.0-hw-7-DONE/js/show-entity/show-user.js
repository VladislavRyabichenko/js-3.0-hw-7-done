import {getUserHTML} from "../markups/user-markup.js";

export function showUserInfo(infoObj) {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    let markup = getUserHTML(infoObj);

    wrapper.insertAdjacentHTML("afterbegin",markup);

    return wrapper;
}