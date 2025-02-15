import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1f2937;
`;

export const PlanetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#1f2937" : "white")};
  color: ${({ active }) => (active ? "white" : "#1f2937")};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ active }) => (active ? "#374151" : "#f3f4f6")};
  }
`;
