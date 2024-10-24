

import PropTypes from 'prop-types';

const Sidebar = ({ recipeQueue, handleRemoveRecipe,cooking,calculateTC, totalTime,totalCalories}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-lg">
            {/* 1st part */}
        <div className="overflow-x-auto">
        <h2 className='border-b-2 text-center text-xl font-bold py-3'>cooked recipe : {recipeQueue.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        recipeQueue.map((recipe, idx) => 
        <tr className="hover text-gray-500" key={idx}>
          <th>{idx + 1}</th>
          <td>{recipe.recipe_name}</td>
          <td>{recipe.preparing_time}</td>
          <td>{recipe.calories}</td>
          <td>{<button onClick ={()=> {handleRemoveRecipe(recipe.recipe_id)
            calculateTC(recipe.preparing_time,recipe.calories)}
          } className='btn bg-emerald-400 rounded-full hover:bg-transparent text-gray-600'>Preparing</button>}</td>
        </tr>)
     }
     
    </tbody>
  </table>
</div>

{/* 2nd part */}
<div className="overflow-x-auto">
        <h2 className='border-b-2 text-center text-xl font-bold py-3'>cooking on process : {cooking.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
    <tbody>
     
     {
       cooking.map((recipe, idx) => 
        <tr className="hover text-gray-500" key={idx}>
          <th>{idx + 1}</th>
          <td>{recipe.recipe_name}</td>
          <td>{recipe.preparing_time}</td>
          <td>{recipe.calories}</td>
        
        </tr>)}
     <tr className='text-gray-500 border-none'>
     <td></td>
     <td></td>
     <td>Total Time = {totalTime}</td>
     <td>Total Calories = {totalCalories}</td>
     </tr>
     
    </tbody>
  </table>
</div>

        </div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array,
    cooking:PropTypes.array,
    handleRemoveRecipe:PropTypes.func,
    calculateTC:PropTypes.func,
    totalTime:PropTypes.number,
    totalCalories:PropTypes.number
    
};

export default Sidebar;



