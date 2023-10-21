import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import {getDocs} from "firebase/firestore"

 async function ChatList() {
  const session = await getServerSession(authOptions);

  // const chatSnapshot = await getDocs(
  //   chatMembersCollectionGroupRef(session?.user.id)
  // )
  return (
    <div>ChatList</div>
  )
 }

 export default ChatList
