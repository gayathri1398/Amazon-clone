import React from 'react'

const MessageBox = (props) => {
    return (
        <div>
          <p className='border-2 border-transparent bg-red-100 text-red-900 p-2 m-2 rounded-md lg:text-md'>{props.children}</p>
        </div>
    )
}

export default MessageBox
