import React from 'react'

interface Props {
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = (props) => {
  return (
    <div className="">
      <input
        type="text"
        placeholder={props.placeholder}
        className="border border-gray-300 p-2 mb-4 rounded"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default Search
