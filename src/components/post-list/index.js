import PostListItem from './item'
import styles from './PostList.module.css'

export default function PostList({ posts }) {
  return (
    <ul className={styles.postList}>
      {posts?.map((post, index) => {
        return <PostListItem key={post.id} meta={post} sort={index} />
      })}
    </ul>
  );
}