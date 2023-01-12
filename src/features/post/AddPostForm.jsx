import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUser } from '../users/usersSlice'
import { addPost } from './postSlice'

const postInterFace = {
  title: '',
  description: '',
}

export const AddPostForm = () => {
  const dispatch = useDispatch()
  const users = useSelector(selectAllUser)

  const [postData, setPostData] = useState(postInterFace)
  const [userId, setUserId] = useState('')

  const updatePostData = (e) => {
    setPostData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const addNewPost = (e) => {
    e.preventDefault()
    dispatch(addPost(postData.title, postData.description, userId))
    setPostData(postInterFace)
    return
  }

  const buttonReady = postData.title && postData.description && userId

  const authorList = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    )
  })

  return (
    <section className='py-3'>
      <Container>
        <Row>
          <Col lg='10'>
            <Form>
              <Form.Group>
                <h2 className='fs-2 text-info'>Add A New Post</h2>
              </Form.Group>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  name='title'
                  value={postData.title}
                  onInput={updatePostData}
                  type='text'
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mt-3'>
                <Form.Label>Select A Author</Form.Label>
                <Form.Select onChange={(e) => setUserId(e.target.value)}>
                  <option value=''>Select A User</option>
                  {authorList}
                </Form.Select>
              </Form.Group>
              <Form.Group className='mt-3'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name='description'
                  value={postData.description}
                  onInput={updatePostData}
                  type='text'
                ></Form.Control>
              </Form.Group>
              <Form.Group className='mt-3'>
                <Button
                  disabled={!buttonReady}
                  variant='info'
                  onClick={addNewPost}
                >
                  Add Post
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
