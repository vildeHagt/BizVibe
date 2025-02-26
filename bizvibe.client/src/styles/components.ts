import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.surface};
  color: ${(props) => props.theme.text};
  padding: 15px 20px;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  top: 0;
  width: 100%;
  display: flex;
  text-align: left;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
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

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  padding-top: 80px;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10px;
    padding-top: 60px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
