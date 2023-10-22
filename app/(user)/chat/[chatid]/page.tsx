import { authOptions} from '@/auth';
import {getServerSession}  from "next-auth"
import ChatInput from '@/components/ChatInput';

 function ChatPage({params: {chatId}}: Props) {
  return (
    <>
      <ChatInput chatId='1'/>
      
    </>
  )
}

export default ChatPage
