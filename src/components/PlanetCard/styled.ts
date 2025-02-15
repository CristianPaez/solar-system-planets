import styled from "styled-components";
import Link from "next/link";

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const PlanetImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PlanetName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem;
  color: #2d3748;
`;

export const PlanetInfo = styled.p`
  color: #718096;
  margin: 0 1rem 1rem;
  font-size: 0.95rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
