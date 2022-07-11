import styled from "styled-components";

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts};
  background-color: ${({ theme }) => theme.colors.neutral.darkblue};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 539px;
  height: auto;
  background-color: ${({ theme }) => theme.colors.neutral.darkGrayishBlue};
  border-radius: 16px;
  text-align: center;
  padding-top: 52px;
  position: relative;
  padding-bottom: 3rem;
  margin-inline: 1rem;
`;

const Button = styled.button`
  width: 67px;
  height: 67px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary.neongreen};
  overflow: hidden;
  display: grid;
  place-items: center;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0;
  bottom: -40px;
  left: 50%;
  box-shadow: 0 0 1px ${({ theme }) => theme.colors.primary.neongreen};
  transform: translateX(-50%);
  transition: box-shadow 250ms cubic-bezier(0.075, 0.82, 0.165, 1);

  & img {
    transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover,&:focus {
    box-shadow: 0 0 24px ${({ theme }) => theme.colors.primary.neongreen};
  }

  &:active img {
    transform: rotate(360deg);
  }
`;

export const advicestyle = {
  Wrapper,
  Container,
  Button,
};
