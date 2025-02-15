"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
import { planetActions } from "@/src/domain/actions/planet.actions";
import { Planet } from "@/src/domain/models/planet.models";

export default function MoonDetailTemplate() {
  const [moon, setMoon] = useState<Planet | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const moonId = params?.id as string;

  useEffect(() => {
    const fetchMoonDetails = async () => {
      try {
        const data = await planetActions.getPlanetDetails(moonId);
        setMoon(data);
      } catch (error) {
        console.error("Error fetching moon details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMoonDetails();
  }, [moonId]);

  if (loading) return <div>Loading...</div>;
  if (!moon) return <div>Moon not found</div>;

  return (
    <DetailContainer>
      <Header>
        <BackButton onClick={() => router.back()}>← Back</BackButton>
      </Header>

      <PlanetTitle>{moon.name}</PlanetTitle>

      <InfoGrid>
        <InfoSection>
          <SectionTitle>Physical Characteristics</SectionTitle>
          <InfoItem>
            <Label>Mean Radius</Label>
            <Value>{moon.meanRadius?.toLocaleString()} km</Value>
          </InfoItem>
          <InfoItem>
            <Label>Gravity</Label>
            <Value>{moon.gravity} m/s²</Value>
          </InfoItem>
          {moon.mass && (
            <InfoItem>
              <Label>Mass</Label>
              <Value>
                {moon.mass.massValue} × 10^{moon.mass.massExponent} kg
              </Value>
            </InfoItem>
          )}
          <InfoItem>
            <Label>Density</Label>
            <Value>{moon.density} g/cm³</Value>
          </InfoItem>
        </InfoSection>

        <InfoSection>
          <SectionTitle>Orbital Characteristics</SectionTitle>
          <InfoItem>
            <Label>Semi-major Axis</Label>
            <Value>{moon.semimajorAxis?.toLocaleString()} km</Value>
          </InfoItem>
          <InfoItem>
            <Label>Eccentricity</Label>
            <Value>{moon.eccentricity}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Inclination</Label>
            <Value>{moon.inclination}°</Value>
          </InfoItem>
        </InfoSection>

        <InfoSection>
          <SectionTitle>Parent Planet</SectionTitle>
          <InfoItem>
            <Label>Orbits</Label>
            <Value style={{ textTransform: "capitalize" }}>
              {moon.aroundPlanet?.planet}
            </Value>
          </InfoItem>
        </InfoSection>
      </InfoGrid>
    </DetailContainer>
  );
}
