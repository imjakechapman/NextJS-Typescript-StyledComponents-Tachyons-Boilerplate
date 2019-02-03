import * as React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div.attrs({
  className: 'flex flex-column justify-center items-center'
})``

/**
 * Styled Wrapper
 */
export default (props: any) => {
  return (
    <StyledWrapper>
      {props.children}
    </StyledWrapper>
  )
}