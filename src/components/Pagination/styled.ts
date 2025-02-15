import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

export const PageButton = styled.button<{ $isActive: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.$isActive ? "#3B82F6" : "#E5E7EB")};
  color: ${(props) => (props.$isActive ? "white" : "#4B5563")};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#2563EB" : "#D1D5DB")};
  }
`;
