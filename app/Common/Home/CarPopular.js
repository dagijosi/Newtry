import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Divider } from '@mui/material'
import React from 'react'

const CarPopular = () => {
  const Popularcar = [
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      price: "$278 Birr",
    },
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      price: "$278 Birr",
    },
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      price: "$278 Birr",
    },
    {
      img: "/image/Card1.png",
      name: "Toyota Corolla 2023",
      price: "$278 Birr",
    },
  ]
  return (
    <div className='p-4 md:p-16' >
      <p className='text-xl font-normal'>POPULAR</p>
      <Divider className='w-40 mt-2'/>
      <div className="grid grid-cols-1 md:grid-cols-4 w-fit mt-4">
        { Popularcar.map((item) => (
          <Card key={item} className="flex flex-row p-2 w-full md:w-fit mb-4 md:mr-4 dark:bg-gray-800">
            <img src={item.img} alt="Card1" className='w-32 h-28 flex-shrink-0' />
            <div className='flex flex-col justify-center ml-4 w-72'>
              <p className="text-sm font-bold">{item.name}</p>
              <p className="text-sm font-bold mt-2">{item.price}</p>
              <Button className="bg-blue-500 dark:bg-gray-950 dark:text-white ml-14 mt-4">Detail</Button>
            </div>
          </Card>
        ))}
        
      </div>
    </div>
  )
}

export default CarPopular
