import ChatList from "@/components/ChatList";

type Props = {
    Params:{};
    searchParams: {
        error: string;
    }
}
function ChatsPage({searchParams: {error}}:Props) {
  return (
    <>
    {/* chat permission chats */}
    {/* chatlist */}
      <ChatList />
    </>
  )
}

export default ChatsPage
