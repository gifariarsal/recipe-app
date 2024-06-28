import RecipeDetails from '@/components/recipe-details';

async function getRecipe(id) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch recipe', { cause: error });
  }
}

const RecipeDetailPage = async ({ params }) => {
  const recipeDetails = await getRecipe(params.details);
  return <RecipeDetails {...recipeDetails} />;
};

export default RecipeDetailPage;
