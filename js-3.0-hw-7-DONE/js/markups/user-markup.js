export function getUserHTML(dataObj) {
    let accountLink = dataObj["html_url"];
    let avatarUrl  = dataObj["avatar_url"];
    let name = dataObj["name"] || "-";
    let creatEDate = dataObj["created_at"];
    let followersNum = dataObj["followers"];
    let location  = dataObj["location"] || "not specified";
    let publicRepos = dataObj["public_repos"];
    let updatedAt = dataObj["updated_at"]

    let markupUser = `
        <a  class="avatar" href="${accountLink}" target="_blank">
            <img src="${avatarUrl}" alt="avatar">
        </a>
        <div class="name">Name: <a href="${accountLink}" target="_blank" >${name}</a></div>
        <div class="login">Login: <a class="login" href="${accountLink}" target="_blank">${dataObj["login"]}</a></div>
        <div class="repositories-num">Public repositories number: <span>${publicRepos}</span></div>
        <div class="followers-num">Followers number: <span>${followersNum}</span></div>
        
        <div class="location">Location: <span>${location}</span></div>
        <div class="create-date">Created: <span>${creatEDate}</span></div>
        <div class="update-date">Last update: <span>${updatedAt}</span></div>
        <div class="acc-link"><a  href="${accountLink}" target="_blank">Go to account</a></div>

    `
    return markupUser
}