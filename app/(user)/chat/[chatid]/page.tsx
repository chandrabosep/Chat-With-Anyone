import { authOptions} from '@/auth';
import {getServerSession}  from "next-auth"
import ChatInput from '@/components/ChatInput';
import { type } from 'os';

type Props = {
  params: {
    chatId: string;
  };
}

async function ChatPage({params: {chatId}}: Props) {
  const session = await getServerSession(authOptions)
  return (
    <>
      <ChatInput chatId={chatId}/>
      
    </>
  )
}

export default ChatPage
