import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full mx-auto flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'url(/bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: -1,
        }}
      />
      <h1 className="text-2xl lg:text-4xl font-bold text-gray-800 mb-2">
        Recipe App
      </h1>
      <p className="w-2/3 text-center text-gray-700 font-medium mb-10">
        Discover Recipe Realm, your gateway to culinary exploration! Unleash
        your inner chef with easy-to-follow recipes and diverse dishes that will
        inspire your kitchen creativity.
      </p>
      <Link href="/recipes">
        <Button size="lg">
          <label className="md:text-lg cursor-pointer">Explore Recipes</label>
        </Button>
      </Link>
    </div>
  );
}
