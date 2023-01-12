import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAllPost } from './postSlice';
import ShowAuthor from '../users/ShowAuthor';
import TimesAgo from './TimesAgo';
import ReactionButtons from '../reations/ReactionButtons';

const PostList = () => {
  const posts = useSelector(selectAllPost);
  const articles = posts.map((post) => {
    return (
      <Col key={post.id} sm='6' md='3'>
        <article className='card'>
          <div className='card-header'>
            <h4 className='card-title'>{post.title}</h4>
          </div>
          <div className='card-body'>
            <p className='card-text'>
              {post.description.substring(0, 100) + '...'}
            </p>
            <ShowAuthor userId={post.userId} />
            <TimesAgo timePosted={post.timePosted} />
            <ReactionButtons post={post} />
          </div>
        </article>
      </Col>
    );
  });

  return (
    <section id='posts' className='py-4'>
      <Container>
        <Row className='g-3'>{articles}</Row>
      </Container>
    </section>
  );
};

export default PostList;
