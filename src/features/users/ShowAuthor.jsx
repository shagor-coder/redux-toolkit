import { useSelector } from 'react-redux'
import { selectAllUser } from './usersSlice'

const ShowAuthor = ({ userId }) => {
  const postAuthors = useSelector(selectAllUser)

  const currentPostAuthor = postAuthors.find((author) => {
    return author.id === userId
  })

  return (
    <span>By {currentPostAuthor ? currentPostAuthor.name : 'UnKnown'}</span>
  )
}

export default ShowAuthor
