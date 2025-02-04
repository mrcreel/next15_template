import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="flex h-[10%] flex-col justify-start border-2 border-black bg-emerald-400 py-2">
      <div className="flex flex-row gap-2">
        <FaRegCopyright />
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
