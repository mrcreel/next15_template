import Breadcrumbs from './Breadcrumbs'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className="flex flex-col bg-slate-400 py-2">
      <NavBar />
      <Breadcrumbs
        homeElement={' Home '}
        separator={<span> {'>'} </span>}
        activeClasses="text-white"
        containerClasses="flex flex-row py-2 items-center bg-gradient-to-r from-purple-400 to-blue-400"
        listClasses="hover:underline mx-2 text-sm font-bold "
        capitalizeLinks
      />
    </header>
  )
}

export default Header
