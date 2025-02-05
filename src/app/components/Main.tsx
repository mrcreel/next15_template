import CenterColumn from './CenterColumn'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'

const Main = () => {
  return (
    <main className="flex h-full w-full flex-row bg-emerald-400">
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </main>
  )
}

export default Main
