import React from 'react'
import Button from './Button'
import Links from './Links'
// import Logo from './Logo'

const Navbar = () => {
    var logo=["Services","Projects","About"]
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",background:"black",color:"white"}}>
 
         
         <Links props={logo}/>
         <Button/>
      </div>
    </div>
  )
}

export default Navbar
