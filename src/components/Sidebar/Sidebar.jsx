

import PropTypes from 'prop-types';

const Sidebar = ({ recipeQueue}) => {
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
        <tr className="hover" key={idx}>
          <th>{idx + 1}</th>
          <td>{recipe.recipe_name}</td>
          <td>{recipe.preparing_time}</td>
          <td>{recipe.calories}</td>
          <td>{<button className='btn bg-emerald-400 rounded-full hover:bg-transparent text-gray-600'>Preparing</button>}</td>
        </tr>)
     }
     
    </tbody>
  </table>
</div>

{/* 2nd part */}

        </div>
    );
};

Sidebar.propTypes = {
    recipeQueue: PropTypes.array
    
};

export default Sidebar;



