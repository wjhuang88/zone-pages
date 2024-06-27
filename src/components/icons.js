"use client";

export function EyeIcon({ value, style }) {
  return (
    <span style={{ display: "flex", flexDirection: "row", alignItems: 'center', ...style }}>
      <svg
        t="1601108913211"
        className="icon"
        viewBox="0 0 1152 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="14440"
        width="14"
        height="14"
      >
        <path
          style={{ fill: "#95a5a6" }}
          d="M1145.04 482.8C1036.58 271.18 821.86 128 576 128S115.36 271.28 6.96 482.82a64.7 64.7 0 0 0 0 58.38C115.42 752.82 330.14 896 576 896s460.64-143.28 569.04-354.82a64.7 64.7 0 0 0 0-58.38zM576 800a288 288 0 1 1 288-288 287.86 287.86 0 0 1-288 288z m0-480a190.62 190.62 0 0 0-50.62 7.58 95.7 95.7 0 0 1-133.8 133.8A191.56 191.56 0 1 0 576 320z"
          p-id="14441"
        ></path>
      </svg>
      <span style={{ marginLeft: 4 }}>{value}</span>
    </span>
  )
}

export function HeartIcon({ value, style }) {
  return (
    <span style={{ display: "flex", flexDirection: "row", alignItems: 'center', ...style }}>
      <svg
        t="1601108165944"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="10469"
        width="14"
        height="14"
      >
        <path
          style={{ fill: "#e74c3c" }}
          d="M893.44 307.484444a185.173333 185.173333 0 0 0-56.888889-76.231111 227.555556 227.555556 0 0 0-317.44 13.368889L512 256l-6.542222-6.826667a235.52 235.52 0 0 0-155.306667-72.533333 203.946667 203.946667 0 0 0-158.151111 58.026667 297.528889 297.528889 0 0 0-56.888889 75.946666 217.315556 217.315556 0 0 0-19.911111 89.315556 202.24 202.24 0 0 0 16.497778 89.315555A253.44 253.44 0 0 0 182.044444 568.888889l241.493334 248.035555a128.568889 128.568889 0 0 0 185.457778 0L850.488889 568.888889a203.946667 203.946667 0 0 0 49.493333-79.644445 281.315556 281.315556 0 0 0 16.497778-89.315555 534.186667 534.186667 0 0 0-23.04-92.444445zM390.542222 347.022222a31.288889 31.288889 0 0 1-29.866666 26.453334 39.822222 39.822222 0 0 0-19.626667 3.413333 81.066667 81.066667 0 0 0-33.28 16.497778c-6.542222 6.542222-6.542222 13.368889-9.955556 16.497777v3.413334c-3.128889 6.542222-3.128889 13.084444-6.542222 19.911111a32.142222 32.142222 0 0 1-32.995555 26.453333h-6.542223a32.711111 32.711111 0 0 1-26.453333-36.408889c3.128889-13.368889 6.542222-23.324444 9.671111-32.995555a106.951111 106.951111 0 0 1 16.782222-33.28 124.586667 124.586667 0 0 1 102.4-46.364445 39.253333 39.253333 0 0 1 36.408889 36.408889z"
          p-id="10470"
        ></path>
      </svg>
      <span style={{ marginLeft: 2 }}>{value}</span>
    </span>
  )
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
  )
}

export function TagIcon({ value, style }) {
  return (
    <span style={{ display: "flex", flexDirection: "row", alignItems: 'center', ...style }}>
      <svg
        t="1601111091728"
        className="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="27106"
        width="14"
        height="14"
      >
        <path
          style={{ fill: "#34495e" }}
          d="M877.184 316.842667l24.234667 24.234666c12.885333 12.885333 20.138667 30.421333 20.138666 48.64v438.186667c0 38.016-30.805333 68.864-68.821333 68.864h-300.458667a68.864 68.864 0 0 1-61.610666-38.058667l366.378666-366.336c11.264-11.306667 18.261333-26.112 19.797334-41.898666l0.341333-6.826667V316.885333zM735.018667 85.333333C776.789333 85.333333 810.666667 119.210667 810.666667 160.981333v233.514667c0 20.053333-7.978667 39.296-22.186667 53.504l-340.48 340.48a75.648 75.648 0 0 1-107.008 0l-233.514667-233.472a75.648 75.648 0 0 1 0-107.008L448 107.52c14.208-14.208 33.450667-22.186667 53.504-22.186667h233.514667z m-160.085334 145.066667a90.666667 90.666667 0 1 0 0 181.333333 90.666667 90.666667 0 0 0 0-181.333333z"
          p-id="27107"
        ></path>
      </svg>
      <span style={{ marginLeft: 2 }}>{value}</span>
    </span>
  )
}

export function MenuIcon({ className, color }) {

  const barStyle = {
    display: "block",
    width: "22px",
    height: "2px",
    borderRadius: "1px",
    backgroundColor: color
  }

  return (
    <div className={className} style={{width: '53px', height: '53px'}}>
      <span style={barStyle}></span>
      <span style={{ ...barStyle, marginTop: '4px' }}></span>
      <span style={{ ...barStyle, marginTop: '4px' }}></span>
    </div>
  )
}