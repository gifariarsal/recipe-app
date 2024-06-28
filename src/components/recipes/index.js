import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
        <Link href={'/'}>Go Home</Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes &&
            recipes.map((recipe) => (
              <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.03] transition-all">
                    <div className="w-full">
                      <Image
                        priority
                        src={recipe.image}
                        alt={recipe.name}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 truncate whitespace-nowrap overflow-hidden text-ellipsis">
                        {recipe.name}
                      </h3>
                      <div className="mt-4 flex items-center flex-wrap gap-2">
                        <p className="text-lg text-gray-600">
                          Rating: {recipe.rating}
                        </p>
                        <div className="ml-auto">
                          <p className="text-lg text-gray-600 font-bold">
                            {recipe.cuisine}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
