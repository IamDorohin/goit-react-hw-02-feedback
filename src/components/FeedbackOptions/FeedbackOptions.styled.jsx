import styled from 'styled-components';

export const ButtonsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const ButtonsItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  width: 70px;
  height: 25px;
  background-color: #103645;
  border: 1px solid transparent;
  border-radius: 5px;

  &:hover,
  &:focus {
    color: #8f5810;
    border-color: #000;
  }
`;
