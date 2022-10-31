import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 85px 1fr;
  grid-auto-rows: 115px;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.theme.colors.foreground["color-foreground"]};
  border-radius: 4px;
  overflow: hidden;

  a {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Content = styled.div`
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.colors.blue["color-blue-600"]};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    font-size: 0.9rem;
  }

  time {
    color: ${(props) => props.theme.colors["color-text"]};
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

export const Main = styled.div`
  font-size: 0.8rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  a {
    border-radius: 2px;
    height: 36px;
    width: 36px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  gap: 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1px;
    background: transparent;
    border: none;
    cursor: pointer;
    font-weight: 500;
  }
`;
