// actions
const ADD = "ADD"
const REQUEST_POSTS = 'REQUEST_POSTS'

export function AddNum( ) {
    return {
      type: ADD,
    }
}


function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}




const initialState = {
    count: 0,
    posts : []

}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD:
            
          return Object.assign({}, state, {
            count : state.count + 1
          })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                
            })

        default:
          return state
      }
}