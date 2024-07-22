const usernameEl = document.querySelector("#username")
const titleEl = document.querySelector("#title")
const contentEl = document.querySelector("#content")
const blogForm = document.querySelector("#blogForm")
const posts = JSON.parse(localStorage.getItem("posts"))||[]

blogForm.addEventListener("submit", function(e){
    e.preventDefault()
    if (usernameEl.value&&titleEl.value&&contentEl.value){
    const blogobject = {
        username: usernameEl.value,
        title: titleEl.value,
        content: contentEl.value,
    }
    posts.push(blogobject)
    localStorage.setItem("posts",JSON.stringify(posts))
    window.location.replace("blog.html")
    } else {
        alert("Must Complete All Inputs")
        return
    }
})