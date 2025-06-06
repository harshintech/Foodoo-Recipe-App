import React from "react";
import RecipeItem from "../../components/recipe-list";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-8">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold mt-20">
            Nothing To Added In Favorites
          </p>
        </div>
      )}
    </div>
  );
}
