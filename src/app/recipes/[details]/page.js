import RecipeDetails from '@/components/recipe-details';
import { getRecipe } from '@/lib/api';

const RecipeDetailPage = async ({ params }) => {
  const recipeDetails = await getRecipe(params.details);
  return <RecipeDetails {...recipeDetails} />;
};

export default RecipeDetailPage;
