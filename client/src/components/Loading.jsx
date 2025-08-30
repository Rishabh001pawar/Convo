import React from 'react'

const Loading = ({ height = '100vh' }) => {
  return (
    <div style={{ height}} className='flex items-center justify-center h-screen'>
      <h1 className='w-10 h-10 rounded-full border-3 border-purple-500 border-t-transparent animate-spin'></h1>
    </div>
  )
}

export default Loading
