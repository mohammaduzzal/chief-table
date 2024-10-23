
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {

  return (
    <div className='container mx-auto'>
           {/* header */}
           <Header/>
           {/* banner */}
           <Banner/>
           {/* ourRecipes */}
           <OurRecipes/>
           {/* card section */}
           <section className='flex flex-col md:flex-row gap-6 my-20'>
            {/* cards */}
            <Recipes/>
            {/* sidebar */}
            <Sidebar/>
           </section>
    
    </div>
  )
}

export default App
