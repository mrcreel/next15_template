import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex h-[10%] flex-col justify-start bg-emerald-400 p-2">
      <div className="flex flex-row items-center">
        <FaRegCopyright />
        <p> {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
