import Link from 'next/link';
import { Button } from '../ui/button';

const RecipeDetails = ({ image, name, ingredients, mealType, cuisine }) => {
  return (
    <div className="p-8 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
      <Link href={'/recipes'}>
        <Button>Back</Button>
      </Link>
      <div className='mt-6'>
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={image}
              name={name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-950">{name}</h2>
            <div className="gap-4 mt-5">
              <p className="text-2xl text-gray-700">{mealType[0]}</p>
            </div>
            <div className="mt-5">
              <p className="text-xl text-gray-800">{cuisine}</p>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ol className="space-y-3 list-decimal mt-4 pl-4 text-sm text-gray-700">
                {ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
