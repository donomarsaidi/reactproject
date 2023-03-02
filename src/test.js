import React from 'react'

function test() {
    const users=[
        {name:'mohamed',age:34},
        {name:'mohamed',age:34},
        {name:'mohamed',age:34},
        {name:'mohamed',age:34},

    ]
    const testig = () => {users.map(person=> person.age > 18 ? console.log(`${person.name}`) : console.log(`${person.name} n'est pas adulte`))}
  return (
    <div>
          {testig()}
       </div>
  )
}

export default test;