import { XCircleIcon } from '@heroicons/react/outline'
import React from 'react'

type Props = {
    ShowForm:() => void;

}

const NewCard = ({ShowForm}:Props) => {
  return (
    <div className="flex justify-between p-3">
    <textarea
      className="w-full rounded border-gray-300 focus:ring-purple-400"
      rows={3}
      placeholder="Task info"
      name="title"
    />
    {/* <button onClick={handdleAdd}>save</button> */}
    <button onClick={ShowForm}>
      <XCircleIcon className="h-5 w-5 text-red-500" />
    </button>
  </div>
  )
}

export default NewCard