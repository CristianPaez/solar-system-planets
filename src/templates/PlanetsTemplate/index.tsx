"use client";

import { useEffect, useMemo } from "react";
import Pagination from "@/src/components/Pagination";
import { usePlanetStore } from "@/src/domain/store/planet.store";
import { planetActions } from "@/src/domain/actions/planet.actions";
import { PageContainer, PlanetsGrid, Title } from "./styled";
import SearchAndSort from "@/src/components/SearchAndSort";
import PlanetCard from "@/src/components/PlanetCard";

export default function PlanetsTemplate() {
  const {
    planets,
    searchTerm,
    sortOrder,
    currentPage,
    itemsPerPage,
    setCurrentPage,
    favorites,
  } = usePlanetStore();

  useEffect(() => {
    planetActions.fetchPlanets();
  }, []);

  const filteredAndSortedPlanets = useMemo(() => {
    return planets
      ?.filter((planet) =>
        planet.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      ?.sort((a, b) => {
        const aIsFavorite = favorites.includes(a.id);
        const bIsFavorite = favorites.includes(b.id);

        if (aIsFavorite !== bIsFavorite) {
          return aIsFavorite ? -1 : 1;
        }
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      });
  }, [planets, searchTerm, sortOrder, favorites]);

  const paginatedPlanets = useMemo(() => {
    return filteredAndSortedPlanets.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );
  }, [filteredAndSortedPlanets, currentPage, itemsPerPage]);

  return (
    <PageContainer>
      <Title>Solar System Planets</Title>
      <SearchAndSort />
      <PlanetsGrid>
        {paginatedPlanets?.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </PlanetsGrid>
      <Pagination
        currentPage={currentPage}
        totalItems={filteredAndSortedPlanets.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </PageContainer>
  );
}
