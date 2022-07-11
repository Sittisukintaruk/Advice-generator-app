import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary.lightcyan};
  margin-top: 37px;
  font-weight: 800;
  padding-inline: 5rem;
  margin-bottom: 25px;
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.primary.neongreen};
  letter-spacing: 0.25em;
`;

export { H1, H3 };
