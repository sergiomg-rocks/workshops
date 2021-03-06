import React, { useState } from 'react' // 1
import Post from './Post.jsx' // 1
import NewPost from './NewPost.jsx' // 1

function Content() { // 1
    const [state, setState] = useState({ // 2
        posts: [] // 2
    }) // 2

    const reload = async () => { // 3
        let response = await fetch('/all-posts') // 3
        let body = await response.text() // 3
        console.log("/all-posts response", body) // 3
        body = JSON.parse(body) // 3
        setState(state => produce(state, st => { // 3
            st.posts = body // 3
        })) // 3
    } // 3

    return (<div> {/* 4 */}
        <button onClick={reload}> load </button> {/* 4 */}
        <div>{state.posts.map(p => <Post key={p._id} contents={p} />)}</div> {/* 4 */}
        <NewPost /> {/* 4 */}
    </div>) // 4

} // 1

export default Content // 1
