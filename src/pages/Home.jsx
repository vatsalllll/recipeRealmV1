import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchRecipes } from '../services/api';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['recipes', searchTerm, currentPage],
    queryFn: () => searchRecipes(searchTerm, currentPage, recipesPerPage),
    enabled: !!searchTerm,
  });

  const handleSearch = (query) => {
    setSearchTerm(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = data ? Math.ceil(data.totalResults / recipesPerPage) : 0;

  return (
    <div className=''>
      <SearchBar onSearch={handleSearch} />
      
      {!searchTerm && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Welcome to RecipeRealm</h2>
          <p className="text-gray-600">Search for your favorite recipes above</p>
        </div>
      )}
      
      {isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading...</p>
        </div>
      )}
      
      {error && (
        <div className="text-center py-12">
          <p className="text-red-600">Error: {error.message}</p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.results?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
      
      {data?.results?.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Home;
