import styled from "styled-components";

export const FavoriteButtonContainer = styled.button<{ $isFavorite: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $isFavorite }) => ($isFavorite ? "#FFD700" : "#6b7280")};
  font-size: 1.5rem;
  transition: transform 0.2s, color 0.2s;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    color: ${({ $isFavorite }) => ($isFavorite ? "#FFA500" : "#FFD700")};
  }
`;
