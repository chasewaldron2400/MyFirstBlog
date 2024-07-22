const blogPosts = document.querySelector("#blogPosts")
const posts = JSON.parse(localStorage.getItem("posts"))||[]

for (let index = 0; index < posts.length; index++) {
    let h3 = document.createElement("h3")
    let h4 = document.createElement("h4")
    let p = document.createElement("p")
    let div = document.createElement("div")
    h3.textContent = posts[index].title
    h4.textContent = posts[index].content
    p.textContent = "posted by: "+posts[index].username
    div.appendChild(h3)
    div.appendChild(h4)
    div.appendChild(p)
    blogPosts.appendChild(div)
    
}

const backButton = document.querySelector("#back")
backButton.addEventListener("click", function(){
    window.location.replace("./index.html")
}) 