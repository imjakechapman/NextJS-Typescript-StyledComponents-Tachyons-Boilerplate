import * as React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1.attrs({
  className: 'f3 f1-ns f2-m fw7 i c-bo--muted bf-header'
})``

/**
 * Styled Title
 */
export default (props: any) => {
  return (
    <StyledTitle>
      {props.children}
    </StyledTitle>
  );
}