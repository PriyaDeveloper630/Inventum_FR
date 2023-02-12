import React from 'react'
import inventum from '../../../src/images/name.png'
import testtube from '../../../src/images/logo.png'

function Header() {
  return (
    <div>
       <img className="testtube" src={testtube} alt="Logo" />
      <img className="landinglogo" src={inventum} alt="Logo" />
    </div>
  )
}

export default Header