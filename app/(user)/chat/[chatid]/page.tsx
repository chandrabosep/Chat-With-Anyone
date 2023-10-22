import { authOptions} from '@/auth';
import {getServerSession}  from "next-auth"
import ChatInput from '@/components/ChatInput';

 function ChatPage() {
  return (
    <>
      <ChatInput/>
      
    </>
  )
}

export default ChatPage
