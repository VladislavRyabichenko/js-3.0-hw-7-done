import {getReposHTML} from "../markups/repository-markup.js";

export function showReposInfo(repositories) {
    let container = document.createElement("div");

    repositories.forEach(elem => {
        let markup = getReposHTML(elem)
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        wrapper.insertAdjacentHTML("afterbegin",markup);
        container.append(wrapper)
    })
    return container;
}