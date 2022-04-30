import {messageNoResponse} from "./warnings.js";

describe("Testing warnings messages", ()=>{


    test("'messageNoResponse'", ()=>{
        let container = document.createElement("div");

        let messageBlock = document.createElement("div");
        messageBlock.classList.add("no-response-message");
        messageBlock.innerHTML = `
        <p>Error: no response</p>
        `

        messageNoResponse.call(container)
        expect(container.children.length === 1).toBe(true);
        expect(container.children[0].classList.contains("no-response-message")).toBe(true);
    })
})