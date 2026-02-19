import React from 'react'
import Card from './components/card/Card'
import shoes from './assets/sh.png'
import cap from './assets/img.png'

const App = () => {
  return (
    <section className=' bg-yellow-400 '>
      <div className='container mx-auto flex justify-center px-4 pt-20 pb-75'>
        <div className='md:flex gap-x-5 '>
      <Card im={shoes} btn='bg-orange-400' book=' text-orange-400'/>
      <Card im={cap} btn="bg-blue-400"  book='text-blue-400'/>
    </div>
      </div>
    </section>
  )
}

export default App
