"use client"
import React from 'react'
import { Button } from './ui/button'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

function CreateChat() {
    const router = useRouter();
    const createNewChat = () => {
        router.push('/chat/new')
    }
  return (
    <Button onClick={createNewChat} variant={'ghost'}>
      <MessageSquarePlusIcon className='dark:text-white  text-black' />
    </Button>
  )
}

export default CreateChat
