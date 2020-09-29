export function EyeIcon({ value, style }) {
  return (
    <span style={{ display: "flex", flexDirection: "row", alignItems: 'center', ...style }}>
      <img src="/assets/icons/eye.svg" alt="阅读" />
      <span style={{ marginLeft: 4 }}>{value}</span>
    </span>
  );
}

export function HeartIcon({ value, style }) {
  return (
    <span style={{ display: "flex", flexDirection: "row", alignItems: 'center', ...style }}>
      <img src="/assets/icons/heart.svg" alt="喜欢" />
      <span style={{ marginLeft: 2 }}>{value}</span>
    </span>
  );
}

export function MessageIcon({ value, style }) {
  return (
    <span style={{ display: "flex", flexDirection: "row", alignItems: 'center', ...style }}>
      <img src="/assets/icons/message.svg" alt="留言" />
      <span style={{ marginLeft: 3 }}>{value}</span>
    </span>
  );
}

export function TagIcon({ value, style }) {
  return (
    <span style={{ display: "flex", flexDirection: "row", alignItems: 'center', ...style }}>
      <img src="/assets/icons/tag.svg" alt="标签" />
      <span style={{ marginLeft: 2 }}>{value}</span>
    </span>
  );
}