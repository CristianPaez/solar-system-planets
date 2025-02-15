import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { Planet } from "../models/planet.models";

interface PlanetState {
  planets: Planet[];
  favorites: string[];
  searchTerm: string;
  sortOrder: "asc" | "desc";
  currentPage: number;
  itemsPerPage: number;
  setSearchTerm: (term: string) => void;
  setSortOrder: (order: "asc" | "desc") => void;
  setCurrentPage: (page: number) => void;
  setPlanets: (planets: Planet[]) => void;
  addToFavorites: (planetId: string) => void;
  removeFromFavorite: (planetId: string) => void;
  getFavoritePlanets: () => Planet[];
}

const createPlanetState: StateCreator<PlanetState> = (set, get) => ({
  planets: [],
  favorites: [],
  searchTerm: "",
  sortOrder: "asc",
  currentPage: 1,
  itemsPerPage: 5,
  setSearchTerm: (term) => set({ searchTerm: term }),
  setSortOrder: (order) => set({ sortOrder: order }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setPlanets: (planets) => set({ planets }),
  addToFavorites: (planetId) =>
    set((state) => ({
      favorites: [...state.favorites, planetId],
    })),
  removeFromFavorite: (planetId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== planetId),
    })),
  getFavoritePlanets: () => {
    const { planets, favorites } = get();
    return planets.filter((planet) => favorites.includes(planet.id));
  },
});

export const usePlanetStore = create<PlanetState>()(
  persist(createPlanetState, {
    name: "planet-storage",
  })
);
