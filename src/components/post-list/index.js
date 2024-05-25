import PostListItem from './item'
import styles from './PostList.module.scss'

export default function PostList({ postsMeta }) {
  return (
    <ul className={styles.postList}>
      {postsMeta?.map((meta, index) => {
        return <PostListItem key={meta.id} meta={meta} sort={index} />
      })}
    </ul>
  );
}