"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Planet } from "@/src/domain/models/planet.models";
import { planetService } from "@/src/domain/services/planet.services";
import {
  DetailContainer,
  Header,
  BackButton,
  PlanetTitle,
  InfoGrid,
  InfoSection,
  SectionTitle,
  InfoItem,
  Label,
  Value,
} from "./styled";
import Link from "next/link";
import FavoriteButton from "@/src/components/FavoriteButton";

export default function PlanetDetailTemplate() {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const planetId = params?.id as string;

  useEffect(() => {
    const fetchPlanetDetails = async () => {
      try {
        const data = await planetService.getPlanetDetails(planetId);
        setPlanet(data);
      } catch (error) {
        console.error("Error fetching planet details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanetDetails();
  }, [planetId]);

  if (loading) return <div>Loading...</div>;
  if (!planet) return <div>Planet not found</div>;

  return (
    <DetailContainer>
      <Header>
        <BackButton onClick={() => router.back()}>← Back</BackButton>
        {planet && <FavoriteButton planetId={planet.id} />}
      </Header>

      <PlanetTitle>{planet.englishName}</PlanetTitle>

      <InfoGrid>
        <InfoSection>
          <SectionTitle>Physical Characteristics</SectionTitle>
          <InfoItem>
            <Label>Mean Radius</Label>
            <Value>{planet.meanRadius.toLocaleString()} km</Value>
          </InfoItem>
          <InfoItem>
            <Label>Gravity</Label>
            <Value>{planet.gravity} m/s²</Value>
          </InfoItem>
          <InfoItem>
            <Label>Mass</Label>
            <Value>
              {planet.mass.massValue} × 10^{planet.mass.massExponent} kg
            </Value>
          </InfoItem>
          <InfoItem>
            <Label>Density</Label>
            <Value>{planet.density} g/cm³</Value>
          </InfoItem>
        </InfoSection>

        <InfoSection>
          <SectionTitle>Orbital Characteristics</SectionTitle>
          <InfoItem>
            <Label>Semimajor Axis</Label>
            <Value>{planet.semimajorAxis.toLocaleString()} km</Value>
          </InfoItem>
          <InfoItem>
            <Label>Eccentricity</Label>
            <Value>{planet.eccentricity}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Inclination</Label>
            <Value>{planet.inclination}°</Value>
          </InfoItem>
        </InfoSection>

        {planet.moons && (
          <InfoSection>
            <SectionTitle>Moons</SectionTitle>
            <InfoItem>
              <Label>Number of Moons</Label>
              <Value>{planet.moons.length}</Value>
            </InfoItem>
            <InfoItem>
              <Label>List of Moons</Label>
              {planet.moons.map((moon) => (
                <Link
                  key={moon.moon}
                  href={`/moons/${moon.rel.split("/").pop()}`}
                >
                  <Value>{moon.moon}</Value>
                </Link>
              ))}
            </InfoItem>
          </InfoSection>
        )}

        <InfoSection>
          <SectionTitle>Additional Information</SectionTitle>
          {planet.discoveredBy && (
            <InfoItem>
              <Label>Discovered By</Label>
              <Value>{planet.discoveredBy}</Value>
            </InfoItem>
          )}
          {planet.discoveryDate && (
            <InfoItem>
              <Label>Discovery Date</Label>
              <Value>{planet.discoveryDate}</Value>
            </InfoItem>
          )}
          <InfoItem>
            <Label>Average Temperature</Label>
            <Value>{planet.avgTemp}K</Value>
          </InfoItem>
        </InfoSection>
      </InfoGrid>
    </DetailContainer>
  );
}
