import React from 'react'

const BlurCircle = ({
  size = 'md',
  color = 'red',
  position = { top: '0', left: '0' },
  opacity = 10,
  animated = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[500px] h-[500px]'
  }

  const colorClasses = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    white: 'bg-white'
  }

  const opacityClasses = {
    5: 'opacity-5',
    10: 'opacity-10',
    15: 'opacity-15',
    20: 'opacity-20',
    25: 'opacity-25',
    30: 'opacity-30'
  }

  return (
    <div
      className={`
        absolute 
        rounded-full 
        ${sizeClasses[size]} 
        ${colorClasses[color]} 
        blur-3xl 
        ${opacityClasses[opacity]}
        ${animated ? 'animate-pulse' : ''}
        ${className}
      `}
      style={{
        top: position.top,
        left: position.left,
        right: position.right,
        bottom: position.bottom
      }}
    />
  )
}

export default BlurCircle