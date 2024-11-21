import React, { useState } from 'react';
import Select from 'react-select';

const cuisineOptions = [
  { value: 'italian', label: 'Italian' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'indian', label: 'Indian' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'japanese', label: 'Japanese' },
];

const dietOptions = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'glutenFree', label: 'Gluten Free' },
  { value: 'dairyFree', label: 'Dairy Free' },
];

const timeRanges = [
  { value: '15', label: 'Under 15 minutes' },
  { value: '30', label: 'Under 30 minutes' },
  { value: '60', label: 'Under 1 hour' },
];

const FilterBar = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
            clipRule="evenodd"
          />
        </svg>
        Filters {isOpen ? '▼' : '▲'}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
          <Select
            placeholder="Select Cuisine"
            options={cuisineOptions}
            onChange={(option) => onFilterChange('cuisine', option?.value)}
            isClearable
            className="mb-3"
          />
          <Select
            placeholder="Dietary Restrictions"
            options={dietOptions}
            onChange={(option) => onFilterChange('diet', option?.value)}
            isClearable
            className="mb-3"
          />
          <Select
            placeholder="Cooking Time"
            options={timeRanges}
            onChange={(option) => onFilterChange('maxReadyTime', option?.value)}
            isClearable
          />
        </div>
      )}
    </div>
  );
};

export default FilterBar; 