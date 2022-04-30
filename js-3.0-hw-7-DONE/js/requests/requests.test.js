import {requestData} from "./request-data.js";


describe("Request testing",  ()=>{

    let status = 200;
    global.fetch = jest.fn(() =>
        Promise.resolve({
            status: status,
            json: () => Promise.resolve({ data: "requested data" }),
        })
    );

    beforeEach(() => {
        fetch.mockClear();
    });

    test("fetch called and return data object",async ()=>{
        let result = await requestData("some url");
        expect(fetch).toHaveBeenCalledTimes(1)
        expect(result).toBeInstanceOf(Object || Array)

    })

    test("request return 404",async ()=>{
        //status = 404
        fetch.mockReturnValueOnce({status:404})
        expect.assertions(1)

        try{
            await requestData("some url")
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }

    })
})

describe("Request no response", ()=>{

    test("fetch rejects ", async ()=>{
        fetch.mockReturnValueOnce(Promise.reject("API is down"))
        expect(await requestData("some url")).toBeNull()
    })
})



