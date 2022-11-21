import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children, showSearch=true, showTags=true, showFollowRecommends=true }: any) {
  return (
    <div className='layout container'>
        <Header />
        <main>
            {children}
        </main>
        <Sidebar showSearch={showSearch} showTags={showTags} showFollowRecommends={showFollowRecommends} />
    </div>
  )
}
