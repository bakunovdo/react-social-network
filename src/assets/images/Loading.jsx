import React from "react"

const Preloader = () => {
  return (
      <svg xmlns="http://www.w3.org/2000/svg"
           style={{margin: "auto", background: "#EBEBEB", display: "block"}}
           width="200px"
           height="200px"
           viewBox="0 0 100 100"
           preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="40" strokeWidth="5" stroke="#e15b64"
                strokeDasharray="62.83185307179586 62.83185307179586" fill="none" strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1"
    values="0 50 50;360 50 50"/>
        </circle>
        <circle cx="50" cy="50" r="34" strokeWidth="5" stroke="#f8b26a"
                strokeDasharray="53.40707511102649 53.40707511102649" strokeDashoffset="53.40707511102649" fill="none"
                strokeLinecap="round">
          <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1"
    values="0 50 50;-360 50 50"/>
        </circle>
      </svg>
  )
}

export default Preloader
