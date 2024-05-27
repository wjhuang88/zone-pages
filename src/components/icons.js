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
      <svg
        t="1601109896302"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="23888"
        width="14"
        height="14"
      >
        <path
          style={{ fill: "#34495e" }}
          d="M952.106167 322.081707l-28.044757 0 0 308.259173c0 47.995837-27.944835 91.395264-83.967734 91.395264L291.222482 721.736144l0 14.655217c0 42.433515 48.262295 85.266719 97.823575 85.266719l419.638824 0 160.541244 94.392922L945.944314 821.65808l6.161853 0c49.527973 0 71.877179-42.733281 71.877179-85.266719L1023.983346 395.257871C1023.983346 352.824356 1001.63414 322.081707 952.106167 322.081707z"
          p-id="23889"
        ></path>
        <path
          style={{ fill: "#34495e" }}
          d="M758.157689 107.915691 120.655738 107.915691C64.566224 107.915691 0.016654 157.74343 0.016654 205.772574l0 386.364819c0 44.23211 54.690606 76.173823 107.149623 81.103305l-34.139995 129.598751L291.788707 674.139995l466.368983 0c56.089513 0 107.849076-34.006766 107.849076-82.002602L866.006766 279.54827 866.006766 205.772574C866.006766 157.74343 814.213895 107.915691 758.157689 107.915691zM217.913089 434.06089c-31.808483 0-57.588342-25.779859-57.588342-57.588342s25.779859-57.588342 57.588342-57.588342c31.775176 0 57.588342 25.779859 57.588342 57.588342S249.688264 434.06089 217.913089 434.06089zM433.01171 434.06089c-31.808483 0-57.588342-25.779859-57.588342-57.588342S401.203227 318.884205 433.01171 318.884205s57.588342 25.779859 57.588342 57.588342S464.820193 434.06089 433.01171 434.06089zM648.143638 434.06089c-31.808483 0-57.62165-25.779859-57.62165-57.588342s25.813167-57.588342 57.62165-57.588342c31.741868 0 57.588342 25.779859 57.588342 57.588342S679.885506 434.06089 648.143638 434.06089z"
          p-id="23890"
        ></path>
      </svg>
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