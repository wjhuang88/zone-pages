import moment from 'dayjs'
import PostListItem from './item'
import styles from './PostList.module.css'

export default function PostList({ posts }) {
  return (
    <ul className={styles.postList}>
      {posts?.map(post => (
        <PostListItem key={post.id} path={post.id} title={post.title} des={post.bref} date={moment(post.create_time)} />
      ))}
    </ul>
  );
}