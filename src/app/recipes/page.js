import RecipeList from '@/components/recipes';
import { getAllRecipes } from '@/lib/api';

const RecipesPage = async () => {
  const recipes = await getAllRecipes();
  return <RecipeList recipes={recipes} />;
};

export default RecipesPage;
