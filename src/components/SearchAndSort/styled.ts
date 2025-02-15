import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid white;
  border-radius: 8px;
  font-size: 1rem;
  flex: 1;
  min-width: 200px;
  background-color: white;
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
  }
`;

export const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background-color: white;
  min-width: 150px;
  color: #2d3748;

  &:focus {
    outline: none;
    border-color: #4299e1;
  }
`;
