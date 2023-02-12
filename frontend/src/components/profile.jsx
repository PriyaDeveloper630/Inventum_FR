import React from 'react'
import alpha from '../images/alpha.png';
import beta from '../images/beta.png';
import gamma from '../images/gamma.png';
const Profile1 = ({
  userId,
  name,
  bio,
  email
}) => {
  return (
    <div className="OuterProfile">
      <div className='photoEmail'>
        <div className="profileIcon"></div>
        <div className="profileCaption"> <p style={{'font-weight':'bold'}}>{name}</p><p>{email}</p></div>
      </div>
      
      <div className="caption"> 
        <p style={{'margin-left':'20px'}}> {bio}</p>
        
      </div>
      <div className="experience"><p style={{'margin-left':'20px'}}>Experience Level</p><div className='Icon'><img src={alpha} alt="alpha"  className="expLevel" /></div></div>
      <div className="patent"><p style={{'margin-left':'20px'}}>Inventions Patented</p><div className='Icon'><p>5</p></div></div>
      <div className="publications"><p style={{'margin-left':'20px'}}>Research papers published</p><div className='Icon'><p>12</p></div></div>
    </div>
  )
}

export default Profile1