import React from 'react'
import Mycomponent from './Mycomponent'
// import Result from './Result'
// import Tensorflow from './Tensorflow'
// import Testing from './Testing'
// import Google from './Google'
const App = () => {
  localStorage.setItem('count', 0);
  return (
    <div className='h-screen w-screen bg-green-500'><Mycomponent/></div>
  )
}

export default App