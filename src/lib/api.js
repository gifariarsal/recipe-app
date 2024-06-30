export async function getAllRecipes() {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    return data?.recipes || [];
  } catch (error) {
    throw new Error('Failed to fetch recipes', { cause: error });
  }
}

export async function getRecipe(id) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch recipe', { cause: error });
  }
}