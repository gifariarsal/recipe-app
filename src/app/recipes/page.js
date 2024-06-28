import RecipeList from '@/components/recipes';

async function getRecipes() {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    return data?.recipes || [];
  } catch (error) {
    throw new Error('Failed to fetch recipes', { cause: error });
  }
}

const RecipesPage = async () => {
  const recipes = await getRecipes();
  return <RecipeList recipes={recipes} />;
};

export default RecipesPage;
