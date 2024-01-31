import { Button } from '@/components/ui/button'
import { Input } from '@mui/joy'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex flex-col md:flex-row bg-blue-950 dark:bg-gray-800 justify-center p-2'>
      <Input
          type="text"
          placeholder="Search"
          className="dark:bg-gray-900 dark:text-white border-none md:rounded-r-none"
        />
        <Input
        type='date'
        className="dark:bg-gray-900 dark:text-white border-none md:rounded-none mt-2 md:mt-0"
        />
        <Button className="bg-blue-500 dark:bg-gray-950 dark:text-white md:rounded-l-none mt-2 md:mt-0">Search</Button>
    </div>
  )
}

export default SearchBar
