import { FavoriteList } from "../components/FavoriteList/FavoriteList";
import { UserBookings } from "../components/UserBookings/UserBookings";

const FavoritesPage = () => {
  return (
    <div className="px-16 ml-auto mr-auto  w-[1440px] mt-[50px] flex">
      <UserBookings />
      <FavoriteList />
    </div>
  );
};

export default FavoritesPage;
