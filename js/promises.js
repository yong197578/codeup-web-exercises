//
// fetch(`https://api.github.com/users`, {headers: {'Authorization': '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'}})
//
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             // document.getElementsByTagName('body')[0].innerHTML =
//             data.map(username => {
//                 console.log(username.login)
//             })
//         })
function getUser (username){
    let result=
    fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${GITHUB_API_TOKEN}`}})
        .then(res => res.json())
            .then(events => {
                let pushEvents = events.filter(event => event.type === 'PushEvent')
            result = pushEvents
            return pushEvents[0].created_at
            })
        return result
}

// data.map(user => {console.log(user.payload.commits)
getUser('yong197578').then(data => console.log(new Date(data).toDateString()));



