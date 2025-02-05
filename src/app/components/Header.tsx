import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div className="h-[10%]] bg-indigo-400">
      <header className="flex flex-col border-2 border-black bg-slate-400 py-2">
        <NavBar />
        <Breadcrumbs />
      </header>
    </div>
  )
}

export default Header
