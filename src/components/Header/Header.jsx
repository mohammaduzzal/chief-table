
const Header = () => {
    return (
        <div>
          <div className="flex flex-col md:flex-row md:justify-between navbar space-y-2 lg:space-y-0">
  <div>
    
    <a className="text-xl md:text-2xl font-bold">Recipe Calories</a>
  </div>
  <div>
    <ul className="flex gap-4 text-gray-600 font-semibold text-base">
      <li><a>Home</a></li>
      <li><a>Recipes</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="flex flex-row justify-center lg:justify-end">
    {/* search */}
 <div>
 <label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
 </div>
 {/* avatar */}
 <div>
 <div className="avatar">
    <div className="w-12 rounded-full ml-1">
      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
 </div>
  </div>
</div>
        </div>
    );
};

export default Header;