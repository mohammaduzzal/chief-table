
import { useState } from 'react'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import OurRecipes from './components/OurRecipes/OurRecipes'
import Recipes from './components/Recipes/Recipes'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [recipeQueue, setRecipeQueue]  = useState([])
  const [cooking, setCooking] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const handleAddRecipeQueue = recipe =>{
    // console.log('mama to ka lagse bare');
    const isExist = recipeQueue.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue, recipe])
    }
    else{
      alert('Recipe already added')
    }
  }

  const handleRemoveRecipe = id =>{
    // console.log('toka marse re',id);
    //find which  recipe to remove from table 1
    const removedRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)
    //remove from table 1
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    setCooking([...cooking,removedRecipe])

  }

  const calculateTC = (time, calories) =>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
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
            <Sidebar recipeQueue={recipeQueue} 
            handleRemoveRecipe={handleRemoveRecipe} 
            calculateTC={calculateTC}
            totalTime={totalTime}
            totalCalories=
            {totalCalories}
            cooking={cooking}/>
           </section>
    
    </div>
  )
}

export default App
