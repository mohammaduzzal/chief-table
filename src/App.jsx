
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'

function App() {

  return (
    <div className='container mx-auto'>
           {/* header */}
           <Header/>
           {/* banner */}
           <Banner/>
           {/* ourRecipes */}
           <OurRecipes/>
    
    </div>
  )
}

export default App
