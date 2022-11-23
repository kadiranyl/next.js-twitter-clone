import type { NextPage } from 'next'
import Layout from 'components/Layout'
import Chat from 'components/messages/Chat'
import Messages from 'components/messages/Messages'

const MessagesPage: NextPage = () => {
  return (
   <Layout showSidebar={false}>
    <div className="notifications-page">
      <Messages />
      <Chat />
    </div>

   </Layout>
  )
}

export default MessagesPage
