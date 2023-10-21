import { ChatList } from "@/components/ChatList";

type Props = {
    Params:{};
    searchParams: {
        error: string;
    }
}
const page = ({searchParams: {error}}:Props) => {
  return (
    <>
    {/* chat permission chats */}
    {/* chatlist */}
      <ChatList />
    </>
  )
}

export default page
