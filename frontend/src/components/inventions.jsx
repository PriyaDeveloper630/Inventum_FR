import React from 'react'

const data = [
  { date:'28 AUG 2022',title: "Anom", domain: 19, description: "Male" },
  { date:'28 AUG 2022',title: "Megha", domain: 19, description: "Female" },
  { date:'28 AUG 2022',title: "Subham", domain: 25, description: "Male"},
]
const inventions = () => {
  return (
    <div className='OuterInvention'>
      <h2 className='heading' id="heading2">Your Inventions</h2>
      <h4 className='heading'id="heading4">Check Inventions</h4>
      <div className="inventionContainer">
          
          <table>
        <tr>
          <th className='date'>Date</th>
          <th>Title</th>
          <th>Domain</th>
          <th>Description</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td className='date'>{val.date}</td>
              <td>{val.title}</td>
              <td>{val.domain}</td>
              <td>{val.description}</td>
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

export default inventions
