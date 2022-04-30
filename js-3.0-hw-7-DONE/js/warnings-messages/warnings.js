
export function messageNoResponse(){
    let messageBlock = document.createElement("div");


    messageBlock.classList.add("no-response-message");
    messageBlock.innerHTML = `
        <p>NOT FOUND</p>
    `
    this.append(messageBlock);
}