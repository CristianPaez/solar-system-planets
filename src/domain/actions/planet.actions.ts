import { Planet } from "../models/planet.models";
import { planetService } from "../services/planet.services";
import { usePlanetStore } from "../store/planet.store";

export const planetActions = {
  fetchPlanets: async () => {
    const { setPlanets } = usePlanetStore.getState();
    try {
      const planets = await planetService.fetchPlanets();
      console.log(planets);
      setPlanets(planets);
    } catch (error) {
      console.error("Error fetching planets:", error);
    }
  },
  getPlanetDetails: async (id: string): Promise<Planet> => {
    try {
      const planet = await planetService.getPlanetDetails(id);
      return planet;
    } catch (error) {
      console.error("Error fetching planet details:", error);
      throw error;
    }
  },
};
