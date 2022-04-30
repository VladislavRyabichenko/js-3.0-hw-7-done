import {getUserHTML} from "./user-markup.js";
import {getReposHTML} from "./repository-markup.js";
import {getFollowerHTML} from "./follower-markup.js";

describe("test functions return markups", ()=>{


    test("getUserHTML() returns markup string", ()=>{
        let obj = {}
        expect(typeof(getUserHTML(obj))).toBe("string")
    })

    test("getReposHTML() returns markup string", ()=>{
        let obj = {}
        expect(typeof(getReposHTML(obj))).toBe("string")
    })

    test("getFollowerHTML() returns markup string", ()=>{
        let obj = {}
        expect(typeof(getFollowerHTML(obj))).toBe("string")
    })
})