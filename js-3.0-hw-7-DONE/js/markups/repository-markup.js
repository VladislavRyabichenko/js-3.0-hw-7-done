
export function getReposHTML(dataObj) {
    let name = dataObj["name"];
    let desc = dataObj["description"] || "Description not provided";
    let lang = dataObj["language"] || "Language not provided";
    let pushed = dataObj["pushed_at"];
    let update = dataObj["updated_at"];
    let watchersNum = dataObj["watchers_count"];
    let link = dataObj["html_url"];

    let markupRepos = `
        <div class="name">Name: <a href="${link}" target="_blank">${name}</a></div>
        <div class="repos-description repos-ent">Description: <span>${desc}</span></div>
        <div class="repos-language repos-ent">Language: <span>${lang}</span></div>
        <div class="repos-pushed repos-ent">Pushed: <span>${pushed}</span></div>
        <div class="repos-update repos-ent">Undated: <span>${update}</span></div>
        <div class="repos-watchers repos-ent">Repository watchers: <span>${watchersNum}</span></div>
        <div class="repos-link repos-ent"> <a href="${link}" target="_blank">Go to repository</a></div>
        <hr>
    `
    return markupRepos;
}