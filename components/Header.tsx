import { ChevronDownIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="flex flex-initial justify-between">
    <div className="flex items-center">
      <h4 className="text-4xl font-bold text-gray-600">Studio Board</h4>
      <ChevronDownIcon
        className="ml-5 h-9 w-9 rounded-full
      bg-white p-1 text-gray-500 shadow-xl"
      />
    </div>
  </div>
  )
}

export default Header