import * as React from "react"
import styled from "styled-components"

const StyledCard = styled.div.attrs({
  className: 'ph5 pv3 lh0 br2 mt5 mw-5 bg-white bs-default'
})``

/**
 * Styled Card
 */
export default (props: any) => {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  )
}