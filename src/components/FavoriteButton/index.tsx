import { usePlanetStore } from "@/src/domain/store/planet.store";
import { FavoriteButtonContainer } from "./styled";

interface FavoriteButtonProps {
  planetId: string;
}

export default function FavoriteButton({ planetId }: FavoriteButtonProps) {
  const { favorites, addToFavorites, removeFromFavorite } = usePlanetStore();
  const isFavorite = favorites.includes(planetId);

  const toggleFavorite = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (isFavorite) {
      removeFromFavorite(planetId);
    } else {
      addToFavorites(planetId);
    }
  };

  return (
    <FavoriteButtonContainer
      onClick={toggleFavorite}
      $isFavorite={isFavorite}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? "★" : "☆"}
    </FavoriteButtonContainer>
  );
}
