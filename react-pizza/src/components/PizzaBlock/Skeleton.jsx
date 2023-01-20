import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="122" cy="140" r="111" /> 
    <circle cx="122" cy="140" r="111" /> 
    <rect x="8" y="306" rx="6" ry="6" width="256" height="66" /> 
    <rect x="5" y="277" rx="7" ry="7" width="258" height="17" /> 
    <rect x="7" y="393" rx="12" ry="12" width="98" height="44" /> 
    <rect x="131" y="382" rx="30" ry="30" width="138" height="62" />
  </ContentLoader>
)

export default Skeleton