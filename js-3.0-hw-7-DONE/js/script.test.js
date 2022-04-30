
import {setDefaults} from "./set-defaults/set-defaults.js";

describe("test 'setDefaults' function", ()=>{
    let containerUser = document.createElement("div");
    let containerFollowers = document.createElement("div");
    let containerRepositories = document.createElement("div");

    let containers = [containerUser, containerFollowers, containerRepositories];


    containers.forEach(elem =>{
        elem.innerHTML = "<div><p>Some value</p></div>"
    })

    test("test",()=>{
        setDefaults(containers)
        containers.forEach(elem =>{
            expect(elem.innerHTML).toBe("")

        })

    })
})




