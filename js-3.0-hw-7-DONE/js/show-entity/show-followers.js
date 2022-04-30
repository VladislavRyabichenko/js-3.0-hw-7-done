import {getFollowerHTML} from "../markups/follower-markup.js";

export function showFollowersInfo(followers) {
    let container = document.createElement("div");

    followers.forEach(elem => {
        let markup = getFollowerHTML(elem);
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        wrapper.insertAdjacentHTML("afterbegin",markup);
        container.append(wrapper)
    })
    return container
}