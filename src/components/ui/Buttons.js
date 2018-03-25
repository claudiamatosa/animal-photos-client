import styled from "styled-components";
import colors from "../../styles/colors";

export const PrimaryButton = styled.button`
  appearance: none;
  border: none;
  font-size: 16px;
  padding: 10px;
  border-radius: 4px;
  color: white;
  background-color: ${colors.secondary};
  transition: background-color 0.5s ease;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${colors.primary};
  }
`;
