import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <h1 className="text-3xl font-bold text-gray-800">
        {text1} <span className="text-pink-600">
            {text2}
        </span>
    </h1>
  )
}

export default Title