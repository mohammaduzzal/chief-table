import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';


const Recipes = ({handleAddRecipeQueue}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[]) 

    
    
    return (
        <div className="md:w-2/3 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {
                recipes.map((recipe) => <div key={recipe.recipe_id} className="card bg-base-100  border-2 p-2">
                <figure>
                  <img
                    src={recipe.recipe_image}
                    alt={`food item of recipe ${recipe.recipe_name}`} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{recipe.recipe_name}</h2>
                  <p className="text-gray-500">{recipe.description}</p>
                  <h3 className="card-title">ingredients :</h3>
                  <ul className="ml-8">
                    {
                      recipe.ingredients.map((item,idx) => <li className="list-disc text-gray-400"  key={idx}>{item}</li>)
                    }
                  </ul>
                  <div className="flex gap-3 text-gray-600">
                    <div className="flex items-center">
                    <i className="fa-regular fa-clock mr-2 text-2xl"></i>
                    <p>{recipe.preparing_time} minutes.</p>
                    </div>
                    <div className="flex items-center">
                    <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i>
                    <p>{recipe.calories} calories.</p>
                    </div>

                  </div>
                  <div className="card-actions">
                    <button onClick={()=>handleAddRecipeQueue(recipe)} className="btn bg-emerald-400 hover:bg-transparent text-gray-600 py-2 rounded-full">Want To Cock</button>
                  </div>
                </div>
              </div>)
            }

          </div>
            
        </div>
    );
};

Recipes.propTypes = {
  handleAddRecipeQueue: PropTypes.func
    
};


export default Recipes;