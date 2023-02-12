import React from 'react'

const data = [
  { icon:'AP',name: "Anom", level: "beta", Profile_description: "Male" },
  { icon:'MK',name: "Megha", level: "gamma", Profile_description: "Female" },
  { icon:'SD',name: "Subham", level: "beta", Profile_description: "Male"},
]
const Networks = () => {
  return (
    <div className='OuterNetwork'>
      <h2 className='heading'>My Network</h2>
      <h4 className='heading'>Check connection requests</h4>
      <div className="inventionContainer">
          
          <table>
        <tr>
          <th className='profile'>Profile Icon</th>
          <th>Title</th>
          <th>Domain</th>
          <th>Description</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td className='profile'>{val.icon}</td>
              <td>{val.name}</td>
              <td>{val.level}</td>
              <td>{val.Profile_description}</td>
            </tr>
          )
        })}
      </table>
      </div>
      <div className="inventionContainer">

      </div>
      <div className="inventionContainer">

      </div>
    </div>
  )
}

export default Networks
