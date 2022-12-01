import { Post } from "./models/post"

var posts: Post[] = []

export async function getPosts() {
  return await (await fetch("http://localhost:3000/posts" )).json()
}

export function changeStatus(post:Post){
  console.log(post)
fetch(`http://localhost:3000/posts/${post.id}`,{
  method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            body: post.body,
            title: post.title,
            active: !post.active,
      type: post.type,
            id: post.id
        }),
    }).then((response) => {
        return response.json();
    });
}
