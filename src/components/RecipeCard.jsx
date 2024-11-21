import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{recipe.title}</h3>
          <div className="flex items-center text-gray-600 text-sm">
            <span>Ready in {recipe.readyInMinutes} minutes</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
