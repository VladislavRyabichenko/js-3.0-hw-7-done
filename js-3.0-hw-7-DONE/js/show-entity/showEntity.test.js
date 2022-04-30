
import {showUserInfo} from "./show-user.js";
import {showReposInfo} from "./show-repositories.js";
import {showFollowersInfo} from "./show-followers.js";

import {getUserHTML} from "../markups/user-markup.js";
import {getReposHTML} from "../markups/repository-markup.js";
import {getFollowerHTML} from "../markups/follower-markup.js";


jest.mock("../markups/user-markup",()=>({
    getUserHTML : jest.fn(() => {})

}));
jest.mock("../markups/repository-markup",()=>({
    getReposHTML : jest.fn(() => {})

}));
jest.mock("../markups/follower-markup",()=>({
    getFollowerHTML : jest.fn(() => {})

}));


describe("Testing 'showInfo' functions", () => {

    test("test 'ShowUserInfo' calls 'getUserHTML' '", ()=>{
        getUserHTML.mockReturnValueOnce(HTMLDivElement)

        expect(showUserInfo({})).toBeInstanceOf(HTMLDivElement);
        expect(getUserHTML).toHaveBeenCalled();
    })

    test("test 'ShowReposInfo' calls 'getReposHTML' '", ()=>{
        getReposHTML.mockReturnValueOnce(HTMLDivElement)

        expect(showReposInfo([{}])).toBeInstanceOf(HTMLDivElement);
        expect(getReposHTML).toHaveBeenCalled();
    })

    test("test 'ShowFollowersInfo' calls 'getFollowerHTML' '", ()=>{
        getFollowerHTML.mockReturnValueOnce(HTMLDivElement)

        expect(showFollowersInfo([{}])).toBeInstanceOf(HTMLDivElement);
        expect(getFollowerHTML).toHaveBeenCalled();
    })

});

