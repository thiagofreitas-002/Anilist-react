import styled from '@emotion/styled'

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 35%;
  background: ${(props) => props.theme.colors.overlay['color-overlay']};
  transition: ${(props) => props.theme.transitions['trans-200']};
  padding: 12px;
  transform: translateY(100%);
  border-radius: 12px 12px 0px 0px;

  a {
    display: flex;
    align-items: baseline;
    gap: 4px;
    font-weight: 600;
    transition: ${(props) => props.theme.transitions['trans-200']};
    background-color: ${(props) => props.theme.colors.foreground['color-foreground']};
    padding: 4px 12px;
    border-radius: 32px;
    margin-bottom: auto;

    &:hover {
      color: ${(props) => props.theme.colors.blue['color-blue-600']};
    }
  }

  @media (max-width: 768px) {
    opacity: 1;
    visibility: visible;
    transform: translateY(0%);
  }
`

export const Popup = styled.span`
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: ${(props) => props.theme.transitions['trans-200']};
  position: absolute;
  top: 50%;
  right: -50%;
  background: ${(props) => props.theme.colors.overlay['color-overlay']};
  padding: 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.9rem;
  cursor: default;
  display: block;
  transform: translate(-50%, -50%);

  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 7px;
    border-color: #0000 #0000 #0000 #1f2631cc;
    top: 50%;
    right: -10px;
    transform: translate(-50%, -50%);
  }
`

export const FullImage = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px;
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  background: ${(props) => props.theme.colors.overlay['color-overlay']};
  transition: ${(props) => props.theme.transitions['trans-200']};

  &:hover ${Popup} {
    opacity: 1;
    visibility: visible;
    transform: translate(-54px, -50%);
  }

  @media (max-width: 768px) {
    opacity: 1;
    visibility: visible;
  }
`

export const Numbers = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 10px;
  left: 10px;
  opacity: 0;
  visibility: hidden;
  border-radius: 4px;
  padding: 6px;
  font-size: 0.9rem;
  background: ${(props) => props.theme.colors.overlay['color-overlay']};
  transition: ${(props) => props.theme.transitions['trans-200']};

  @media (max-width: 768px) {
    opacity: 1;
    visibility: visible;
  }
`

export const NumbersBase = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.8rem;
  gap: 1px;
`

export const Likes = styled(NumbersBase)``

export const Score = styled(NumbersBase)``

export const Content = styled.div`
  overflow: hidden;
  height: 100%;
  background-position: center;
  background-image: url(${(props) => props.url});
  background-size: cover;
  position: relative;

  &:hover ${Overlay} {
    opacity: 1;
    visibility: visible;
    box-shadow: 20px 20px 60px #121d2b, -20px -20px 60px #18273a;
    transform: translateY(0%);
  }

  &:hover ${FullImage} {
    opacity: 1;
    visibility: visible;
  }

  &:hover ${Numbers} {
    opacity: 1;
    visibility: visible;
  }
`

export const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  background-color: ${(props) => props.theme.colors.foreground['color-foreground']};
  padding: 8px 12px;
  border-radius: 4px;
  margin-top: 12px;
  width: 100%;

  p {
    font-weight: 500;
    font-size: 0.9rem;

    span {
      font-style: italic;
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
`
