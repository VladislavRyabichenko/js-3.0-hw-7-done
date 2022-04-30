// main script

import {requestData} from "./requests/request-data.js";

import {showUserInfo} from "./show-entity/show-user.js";
import {showReposInfo} from "./show-entity/show-repositories.js";
import {showFollowersInfo} from "./show-entity/show-followers.js";

import {setDefaults} from "./set-defaults/set-defaults.js";
import {messageNoResponse} from "./warnings-messages/warnings.js";

export let containerUser = document.querySelector(".result-user");
export let containerFollowers = document.querySelector(".result-followers");
export let containerRepositories = document.querySelector(".result-repos");

export let containers = [containerUser, containerFollowers,containerRepositories];



let searchBtn = document.querySelector(".search-btn");
let input = document.querySelector(".search-input");


document.addEventListener("DOMContentLoaded", function () {

    searchBtn.addEventListener("click", async () => {
        setDefaults(containers);

        let url = `https://api.github.com/users/${input.value}`;

        let dataObj = await requestData(url).then(
            userData=>{
                if (userData === null) {
                    messageNoResponse.call(containerUser);
                    return null;
                }

                let htmlElements = showUserInfo(userData);
                containerUser.append(htmlElements);

                return {
                    repositoriesUrl: userData["repos_url"],
                    followersUrl: userData["followers_url"]
                }
            }
        )



        if (dataObj !== null && dataObj !== undefined) {

            requestData(dataObj.repositoriesUrl).then(
                reposData=>{
                    if (reposData === null){
                        messageNoResponse.call(containerRepositories);
                        return null;
                    }
                    let htmlElements = showReposInfo(reposData);
                    containerRepositories.append(htmlElements);
                }
            )

            requestData(dataObj.followersUrl).then(
                followersData => {
                    if (followersData === null){
                        messageNoResponse.call(containerFollowers);
                        return null;
                    }

                    let htmlElements = showFollowersInfo(followersData);
                    containerFollowers.append(htmlElements);
                }
            )


        }

    })

})














