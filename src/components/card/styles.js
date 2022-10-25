import styled from "@emotion/styled";

export const Text = styled.div`
  position: absolute;
  background-color: rgba(31, 38, 49, 0.7);
  width: 100%;
  height: 41%;
  bottom: 0;
  padding: 8px;
  text-align: center;
  color: white;
  font-size: 0.8rem;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: ${(props) => props.theme.transitions["trans-200"]};

  span {
    font-weight: 300;
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.text["color-text-bright"]};
  }
`;

export const Overlay = styled.div`
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  text-align: center;
  background: rgba(31, 38, 49, 0.7);
  transition: ${(props) => props.theme.transitions["trans-200"]};

  span {
    font-weight: 500;
    font-size: 0.8rem;
    color: ${(props) => props.theme.colors.text["color-text-bright"]};
  }
`;

export const ContainerCard = styled.div`
  a {
    display: inline-block;
    width: 100%;
    height: 115px;
    overflow: hidden;
    border-radius: 4px;
    position: relative;
    /* visibility: hidden; */

    img {
      object-fit: contain;
      object-position: center;
      height: 100%;
      max-height: 115px;
      width: 100%;
      transform: scale(1.5);
    }

    &:hover ${Text} {
      opacity: 0;
      visibility: hidden;
    }

    &:hover ${Overlay} {
      opacity: 1;
    }
  }
`;
