import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children, showSearch=true, showTags=true, showFollowRecommends=true, showSidebar=true }: any) {
  return (
    <div className='layout container'>
        <Header />
        <main>
            {children}
        </main>
        {showSidebar && (
        <Sidebar showSearch={showSearch} showTags={showTags} showFollowRecommends={showFollowRecommends} />
        )}
    </div>
  )
}
