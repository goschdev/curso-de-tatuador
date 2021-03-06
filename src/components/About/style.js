import styled, { css } from "styled-components"

import { desktop } from "../../styles/medias"

export const Container = styled.div`
  display: grid;
  grid-gap: 15px;

  ${desktop(css`
    grid-template-columns: 1fr 1fr;
  `)}
`

export const Side = styled.div`
  display: grid;
  grid-gap: 28px;
  align-items: center;
  justify-content: center;
`

export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
`

export const Image = styled.img`
  display: block;
  margin: 0 auto;
`
