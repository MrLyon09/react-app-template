import React from 'react'

type Props = {
  name: string
}

function Greeting({ name }: Props) {
  console.log("", name);
  return <div>Hello world, {name}</div>
}

export default Greeting
