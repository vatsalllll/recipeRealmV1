import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchRecipeDetails } from '../services/api';

const RecipeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['recipeDetails', id],
    queryFn: () => fetchRecipeDetails(id)
  });

  if (isLoading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-center text-red-600">Error: {error.message}</div>;
  if (!data) return <div className="text-center text-gray-600">No recipe found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={data.image}
        alt={data.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{data.title}</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-gray-600">
            <span className="font-semibold">Servings:</span> {data.servings}
          </div>
          <div className="text-gray-600">
            <span className="font-semibold">Cooking Time:</span> {data.readyInMinutes} minutes
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-2">
            {data.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id} className="text-gray-600">{ingredient.original}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Instructions</h2>
          <div className="text-gray-600 space-y-4" 
               dangerouslySetInnerHTML={{ __html: data.instructions }} 
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
