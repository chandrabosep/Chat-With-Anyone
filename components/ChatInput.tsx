"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import {useForm} from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';


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
    async function onSubmit (formData: z.infer<typeof formSchema>){
      if (values.input.length === 0){
        return;
      }
      if(!session?.user){
        return;
      }
    }

    const userToStore


  return (
    <div className='sticky bottom-0'>
      <Form {...form} />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex space-x-2 p-2 rounded-t-xl max-w-4xl bg-white border dark:bg-slate-800'
      >
        <FormField
        control={form.control}
        name="input"
        render={({ field }) => (
          <FormItem className='flex-1'>
            <FormControl>
              <Input className='border-none bg-transparent dark:placeholder:text-white/70' placeholder='Enter message in ANY language...' {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
        />
        <Button type='submit' className='bg-[#7775d6]'>Send</Button>
      </form>
    </div>
  )
}

export default ChatInput