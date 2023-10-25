"use client"
import React, { use, useState } from 'react'
import { Button } from './ui/button'
import { MessageSquarePlusIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'
import { useSession } from 'next-auth/react'
import {v4 as uuidv4} from 'uuid'
import { serverTimestamp, setDoc } from 'firebase/firestore'

function CreateChat() {
  const router = useRouter();
  const {data: session} = useSession();
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
    const createNewChat = () => {
      if(!session?.user?.id) return;

      setLoading(true);
      toast({
        title: "Create new chat...",
        description:"Hold tight while we create your chat...",
        duration: 3000
      })
        const chatId = uuidv4();

        // await setDoc(addChatRef(chatId,session.user.id),{
        //   userId:session.user.id!,
        //   email: session.user.email!,
        //   timestamp:serverTimestamp(),
        //   isAdmin: true,
        //   chatId:chatId,
        //   image:session.user.image || "",
        // });

        // router.push('/chat/abc')
    } 
  return (
    <Button onClick={createNewChat} variant={'ghost'}>
      <MessageSquarePlusIcon className='dark:text-white  text-black' />
    </Button>
  )
}

export default CreateChat
