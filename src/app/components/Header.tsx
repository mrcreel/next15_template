import Image from 'next/image'
import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="h-[10%]] bg-indigo-400">
      <header className="flex flex-col border-2 border-black bg-slate-400 py-2">
        <div className="flex flex-row items-center gap-2">
          <Image src="/pantry.jpg" alt="logo" width={24} height={24} />
          <NavBar />
        </div>
        <Breadcrumbs />
      </header>
    </div>
  )
}

export default Header
