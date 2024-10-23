
import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [recipeQueue, setRecipeQueue]  = useState([])

  const handleAddRecipeQueue = recipe =>{
    console.log('mama to ka lagse bare');
    setRecipeQueue([...recipeQueue, recipe])
  }
  // console.log(recipeQueue);

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
            <Recipes handleAddRecipeQueue={handleAddRecipeQueue}/>

            {/* sidebar */}
            <Sidebar recipeQueue={recipeQueue}/>
           </section>
    
    </div>
  )
}

export default App
