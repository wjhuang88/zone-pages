import PostListItem from './item'
import moment from 'dayjs'
import styles from './PostList.module.css'

export default function PostList({ posts }) {
  return (
    <ul className={styles.postList}>
      {posts?.map(post => {
        return <PostListItem key={post.id} meta={post} />
      })}
    </ul>
  );
}