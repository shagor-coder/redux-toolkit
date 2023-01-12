import PostList from './features/post/PostList'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { AddPostForm } from './features/post/AddPostForm'

export const App = () => {
  return (
    <div className='App'>
      <PostList />
      <AddPostForm />
    </div>
  )
}
