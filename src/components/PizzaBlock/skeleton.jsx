import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="96" cy="116" r="96" /> 
    <rect x="0" y="226" rx="0" ry="0" width="196" height="30" /> 
    <rect x="0" y="270" rx="0" ry="0" width="195" height="50" /> 
    <rect x="0" y="346" rx="0" ry="0" width="76" height="25" /> 
    <rect x="103" y="330" rx="22" ry="22" width="99" height="44" />
  </ContentLoader>
)

export default Skeleton;