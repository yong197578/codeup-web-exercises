fetch("http://localhost:3000/posts")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error))

// let newPost={
//     id: 3,
//     title: "my second blog post",
//     author: "Codeup"
// }
function createPost() {
    let title = prompt("what is the title of your post?");
    let author = prompt("who is the author of this post?");
    return {title, author}
}

fetch(" http://localhost:3000/posts", {
    //establish method, GET method is default
    method: 'POST',
    headers: {
        //server needs to know what format we are sending data in
        'Content-Type': 'application/json'
    },
    //convert JS object to JSON object data type
    body: JSON.stringify(createPost())
}).then(resp => resp.json())
.then(data => console.log(data))
.catch(error => console.log(error))

function deletePost(id){
    fetch(` http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
    }).then(res => res.json).then(data => console.log(data))
        .catch(error => console.log(error))
}
// deletePost(7)
//DELETE
// //posts/{id} -> have to put variable to delete certain json data
// fetch(" http://localhost:3000/posts/6", {
//     method: 'DELETE',
// }).then(res => res.json).then(data => console.log(data))
//     .catch(error => console.log(error))
function getPostById(id){
    return fetch(`http://localhost:3000/posts/${id}`)
    .then(res => res.json())
        .then(data => data)
}
getPostById(4).then(res => res.json())

//PUT
let editedPost = {
    title: "Dallas",
    author: "mario"
}
//PUT overwrite all object
//PATCH will overwrite only the properties specified
function editPostById(id) {
    return fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PUT', //'PATCH'
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .then(data=>data)
        .catch(error => console.log(error))
    }
    editPostById(4).then(res => console.log(res))