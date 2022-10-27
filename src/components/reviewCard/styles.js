import styled from '@emotion/styled'

export const Overlay = styled.div`
  background-color: ${(props) => props.theme.colors.overlay['color-overlay']};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  font-weight: 500;
  font-size: 0.9rem;
  transition: ${(props) => props.theme.transitions['trans-200']};

  span {
    color: ${(props) => props.theme.colors.text['color-text-bright']};
  }
`

export const ReviewContainer = styled.a`
  background: var(--blue-500);
  display: grid;
  grid-template-rows: 80px 1fr;
  border-radius: 4px;

  &:hover ${Overlay} {
    opacity: 1;
  }
`

export const Banner = styled.div`
  border-radius: 4px 4px 0px 0px;
  overflow: hidden;
  background-image: url('https://cdn.waifu.im/7913.jpg');
  background-size: cover;
  background-position: center 20%;
  background-repeat: no-repeat;
`

export const Content = styled.div`
  padding: 12px;

  header {
    font-weight: 500;
    font-size: 0.8rem;
    padding-bottom: 8px;
  }
`

export const Text = styled.div`
  font-size: 0.8rem;
  font-weight: 300;
  text-align: justify;
  position: relative;
  color: var(--gray-100);
`

export const Like = styled.div`
  display: block;
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: inline-flex;
  align-items: center;
`
