import { httpClient } from "@/config/axios";
import { Planet, PlanetApiResponse } from "../models/planet.models";
import { IHttpClient } from "@/config/axios/types";

export interface IPlanetService {
  fetchPlanets(): Promise<Planet[]>;
  getPlanetDetails(id: string): Promise<Planet>;
}

export class PlanetService implements IPlanetService {
  constructor(private httpClient: IHttpClient) {}

  async fetchPlanets(): Promise<Planet[]> {
    try {
      const response = await this.httpClient.get<PlanetApiResponse>("/bodies", {
        filter: "isPlanet,eq,true",
      });
      console.log("response planets", response);

      return response.bodies.map((planet) => ({
        ...planet,
      }));
    } catch (error) {
      console.error("Error fetching planets:", error);
      throw error;
    }
  }

  async getPlanetDetails(id: string): Promise<Planet> {
    try {
      const response = await this.httpClient.get<Planet>(`/bodies/${id}`);
      return {
        ...response,
      };
    } catch (error) {
      console.error("Error fetching planet details:", error);
      throw error;
    }
  }
}

export const planetService = new PlanetService(httpClient);
