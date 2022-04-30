

export function getFollowerHTML(dataObj) {
    let accountLink = dataObj["html_url"];
    let avatarUrl  = dataObj["avatar_url"];


    let markupFollower = `
        <a  class="avatar" href="${accountLink}" target="_blank">
            <img src="${avatarUrl}" alt="avatar">
        </a>
        <div class="login">Login: <a class="login" href="${accountLink}" target="_blank">${dataObj["login"]}</a></div>
        <div class="acc-link"><a  href="${accountLink}" target="_blank">Go to account</a></div>
        <hr>
    `
    return markupFollower
}


