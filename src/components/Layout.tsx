import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({children}: any) {
  return (
    <div className='layout container'>
        <Header />
        <main>
            {children}
        </main>
        <Sidebar />
    </div>
  )
}
