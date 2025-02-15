import styled from "styled-components";

export const DetailContainer = styled.div`
  max-width: 1200px;
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const BackButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #1f2937;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e5e7eb;
  }
`;

export const PlanetTitle = styled.h1`
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const InfoSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: #374151;
  margin-bottom: 1rem;
  border-bottom: 2px solid #e5e7eb;
  padding-bottom: 0.5rem;
`;

export const InfoItem = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  color: #6b7280;
  display: block;
`;

export const Value = styled.span`
  color: #1f2937;
  font-size: 1.1rem;
`;
