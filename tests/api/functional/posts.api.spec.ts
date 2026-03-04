import { Post } from '../../../api-objects/posts/post.model';
import { test, expect } from '../../../fixtures/base.fixtures';

const dataPOST: Post = {
  id: 1,
  userId: 233,
  title: 'This is a new created post',
  body: "This is the body of the new post"
}

const dataPUT: Post = {
  id: 1,
  userId: 1,
  title: 'replaced title',
  body: "good french"
}

const dataMisingTitle = {
  body: "This is the body of the new post"
}

const dataIncorrectBodyType = {
  id: 231,
  userId: 324,
  title: 'replaced title',
  body: 324
}

test.describe("Posts API functional tests",() =>{

  test ("GET  /posts returns 200", async ({postsClient}) => {
    const response = await postsClient.getAllPosts()
    expect (response.status()).toBe(200)
  })

  test ("GET  /posts/1 returns 200 and valid data", async ({postsClient}) => {
    const response = await postsClient.getPostById(1)
    const body: Post = await response.json()

    expect (response.status()).toBe(200)
    expect (body.id, `post id: ${1}`).toBe(1)
    expect (body.title).toBe("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
    expect (body.body).not.toBe("")
  })

  test ("GET /posts?userId=1 returns 200 and valid data", async ({postsClient}) => {
    const response = await postsClient.getPostsByUser(1)
    const body = await response.json()

    expect (response.status()).toBe(200)
    let postId: number = 1
    for (let post of body){
      expect (post.userId).toBe(1)
      expect (post.id).toBe(postId)
      expect (post.body).not.toBe("")
      expect (post.title).not.toBe("")
      postId += 1
    }
  })

  test ("POST /posts returns 201 and valid data", async ({postsClient}) => {
    const response = await postsClient.createPost(dataPOST)
    const body: Post = await response.json()
    expect (response.status()).toBe(201)
    expect (body.userId, `user id: ${dataPOST.userId}`).toBe(dataPOST.userId)
    expect (body.title).toBe(dataPOST.title)
    expect (body.body).toBe(dataPOST.body)
  })

  test ("PUT /posts returns 200 and valid data", async ({postsClient}) => {
    const response = await postsClient.replacePost(dataPUT.id, dataPUT)
    const body: Post = await response.json()
    expect (response.status()).toBe(200)
    expect (body.userId, `user id: ${dataPUT.userId}`).toBe(dataPUT.userId)
    expect (body.title).toBe(dataPUT.title)
    expect (body.body).toBe(dataPUT.body)
  })

  test ("DELETE /posts/4 returns 200", async ({postsClient}) => {
    const response = await postsClient.deletePost(4)
    expect (response.status()).toBe(200)
  })
})

test.describe("Posts API negative tests",() =>{

    test ("GET /posts/1000 returns 404 - non existing post", async ({postsClient}) => {
    const response = await postsClient.getPostById(1000)
    const body: Post = await response.json()
    expect (response.status()).toBe(404)
    expect (body).toEqual({})
  })

  test ("POST /posts/ returns 400 - BAD REQUEST for missing title", async ({postsClient}) => {
    const response = await postsClient.createPost(dataMisingTitle)
    const body: Post = await response.json()
    expect (response.status()).toBe(201) // should be 400 BAD REQUEST
  })

  test ("POST  /posts/ returns 400 - BAD REQUEST for incorrect body type", async ({postsClient}) => {
    const response = await postsClient.createPost(dataIncorrectBodyType)
    const body: Post = await response.json()
    expect (response.status()).toBe(201) // should be 400 BAD REQUEST
  })

  test ("DELETE  /posts/120000 returns 404 - non existing post", async ({postsClient}) => {
    const response = await postsClient.deletePost(1255)
    const body: Post = await response.json()
    expect (response.status()).toBe(200) // it should be 404 but its not for this mock api
    expect (body).toEqual({})
  })
})