import React from 'react'

const Links = (logo) => {
    const data= logo.props
    console.log(data)
  return (
    <div style={{display:"flex"}}>
      {data.map((elem)=>{
          return <div key={elem}>
               <p style={{marginLeft:"20px"}}>{elem}</p>
          </div>
      })}
    </div>
  )
}

export default Links
