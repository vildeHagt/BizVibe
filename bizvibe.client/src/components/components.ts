import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.text};
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    padding: 10px;
    text-align: left;
  }
`;

export const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

export const CenteredContainer = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  max-width: 1200px;
  margin: 0 auto;
  flex: 1;
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    padding: 10px;
    padding-top: 60px;
  }
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  margin: 10px;

  @media (max-width: 768px) {
    padding: 10px;
    padding-top: 60px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
