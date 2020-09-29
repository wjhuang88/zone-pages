import moment from 'dayjs'
import PostListItem from './item'
import styles from './PostList.module.css'

export default function PostList({ posts }) {
  return (
    <ul className={styles.postList}>
      {posts?.map(post => (
        <PostListItem key={post.path} path={post.path} title={post.title} des={post.des} date={moment()} />
      ))}
    </ul>
  );
}