import CenterColumn from './CenterColumn'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Main = () => {
  return (
    <main className="flex h-[80%] w-full flex-row gap-2 border-2 border-black bg-emerald-400">
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </main>
  )
}

export default Main
