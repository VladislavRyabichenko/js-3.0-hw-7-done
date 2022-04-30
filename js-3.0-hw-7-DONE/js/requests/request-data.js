export async function requestData(url) {
    let data = fetch(url,{
        // в какой-то момент мне начали приходить ответ с кодом 403,
        //типо первышен лимит запросов, добавление токена - один из вариантов решения
        // headers: {
        //     'Authorization': 'ghp_bOHy5deNExEe45oRgMi43maJqySIn29076rbt',
        //
        // }
    }).then(
        success => {
            if (success.status !== 200) {
                return null;
            } else {
                return success.json();
            }
        },
        fail => {
            return null;
        }
    )
    return await data;
}
