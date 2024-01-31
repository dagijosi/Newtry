import React from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowForwardIos } from '@mui/icons-material'

const TopBodyCard = () => {
    const Topcard =[
        {
            image: '/image/Card1.png',
            alt:"Card1",
            title: 'sign up now and post you vehicles '
        },
        {
            image: '/image/Card2.png',
            alt:"Card2",
            title: 'SIGN UP  RENT THE VEHICLE OF YOU CHocie '
        },
        {
            image: '/image/Card1.png',
            alt:"Card3",
            title: 'SIGN UP FOR your adventure  '
        }
    ]
  return (
    <div className='flex flex-col md:flex-row justify-center'>
        {Topcard.map((item) => (
          <Card key={item} className=' flex justify-center items-center mb-4 w-full md:w-fit p-4 bg-gray-200 dark:bg-gray-950 mr-4'>
            <div className='flex flex-col md:flex-row w-fit'>
            <img src={item.image} alt={item.alt} className='w-full md:w-56 h-40 flex-shrink-0'/>
            <div className='mt-4'>
            <p className='md:text-base not-italic font-thin leading-5 uppercase flex md:w-32 md:h-16 flex-col justify-center flex-shrink-0'>{item.title}</p>
            <Button variant='ghost' className="pr-0">Sign Up <ArrowForwardIos className='bg-blue-500 rounded-full p-1 ml-2'/></Button>
            </div>
            </div>
          </Card>
        ))}
      
    </div>
  )
}

export default TopBodyCard
