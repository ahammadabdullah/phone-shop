import { useEffect, useState } from "react";
import PhoneCard from "../../Components/Phones/PhoneCard";
import Phone from "../../Components/Phones/Phone";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const favoritesItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItems) {
      setFavorites(favoritesItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  const handleClearFavorite = () => {
    localStorage.clear();
    setFavorites([]);
    setNoFound("No Data Found");
  };

  return (
    <div className="mt-6">
      {noFound ? (
        <p className="h-[100vh] flex items-center justify-center">
          No Data Found
        </p>
      ) : (
        <div>
          {favorites.length > 0 && (
            <button
              onClick={handleClearFavorite}
              className="px-5 py-2 rounded-lg bg-green-200 block mx-auto"
            >
              Delete All
            </button>
          )}
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {isShow
              ? favorites.map((phone) => (
                  <PhoneCard key={phone.id} phone={phone}></PhoneCard>
                ))
              : favorites
                  .slice(0, 2)
                  .map((phone) => (
                    <PhoneCard key={phone.id} phone={phone}></PhoneCard>
                  ))}
          </div>
          <button
            onClick={() => setIsShow(!isShow)}
            className="px-5 py-2 rounded-lg bg-green-200 block mx-auto"
          >
            {isShow ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
