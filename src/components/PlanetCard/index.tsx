import { Planet } from "@/src/domain/models/planet.models";
import { CardContainer, CardHeader, PlanetInfo, PlanetName } from "./styled";
import FavoriteButton from "../FavoriteButton";

interface PlanetCardProps {
  planet: Planet;
}

export default function PlanetCard({ planet }: PlanetCardProps) {
  return (
    <CardContainer href={`/planets/${planet.id}`}>
      <CardHeader>
        <PlanetName>{planet.englishName}</PlanetName>
        <FavoriteButton planetId={planet.id} />
      </CardHeader>
      <PlanetInfo>
        Mean Radius: {planet.meanRadius?.toLocaleString()} km
      </PlanetInfo>
      <PlanetInfo>Gravity: {planet.gravity} m/s²</PlanetInfo>
    </CardContainer>
  );
}
