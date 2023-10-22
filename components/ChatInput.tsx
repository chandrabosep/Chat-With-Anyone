"use client"
import { useSession } from 'next-auth/react';
import {useForm} from 'react-hook-form';
import * as z from 'zod';


const formSchema = z.object({
    input: z.string().max(1000),
});

function ChatInput({childId}: {childId: string}) {
    const {data: session} = useSession();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            input: "",
        },
    });


  return (
    <div>
      hey
    </div>
  )
}

export default ChatInput