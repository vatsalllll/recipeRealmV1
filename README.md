# RecipeRealm 🍳

> A modern recipe discovery platform designed to simplify cooking and meal planning.

RecipeRealm helps users discover recipes, plan meals, and track nutrition with an intuitive interface and powerful features. Built with React.js and powered by the Spoonacular API, it offers a seamless cooking experience.

## ✨ Features

### Core Functionality
- **Recipe Search & Display**
  - Advanced search capabilities
  - Detailed recipe instructions
  - Favorite recipe management

- **Smart Filtering**
  - Filter by cuisine type
  - Dietary preferences
  - Cooking time constraints
  - Available ingredients

- **Meal Planning**
  - Nutritional tracking
  - Automated shopping lists

### Technical Optimizations
- **Performance**
  - Implemented API response caching
  - Lazy loading for images
  - Debounced search functionality

- **User Experience**
  - Interactive cooking timers
  - Print-optimized recipe views
  - Fully responsive design

- **Reliability**
  - Comprehensive error handling
  - User-friendly error messages
  - API call retry mechanisms

## 🛠️ Technologies

### Frontend
- React.js
- Axios
- React Query
- TailwindCSS/Material-UI

### External Services
- Spoonacular API (Recipe Data)

### Additional Tools
- Recharts/Nivo (Data Visualization)
- dexie.js (Client-side Storage)
- react-error-boundary

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Main routes
├── services/      # API handling
├── context/       # State management
├── utils/         # Helper functions
└── assets/        # Static files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm/yarn
- Spoonacular API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/reciperealm.git
cd reciperealm
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory:
```env
REACT_APP_SPOONACULAR_API_KEY=your_api_key
```

4. Start the development server
```bash
npm start
```

## 📚 Resources

- [Spoonacular API Documentation](https://spoonacular.com/food-api/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

---

Made with ❤️ by Vatsal
