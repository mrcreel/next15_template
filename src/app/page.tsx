import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

const HomePage = () => {
  return (
    <>
      <div className="flex h-full flex-col">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
