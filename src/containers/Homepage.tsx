import * as React from "react"

// Components
import Wrapper from "../components/styled/Wrapper";
import Title from "../components/styled/Title";
import Card from "../components/styled/Card";

type HomepageProps = {}
type HomepageState = {}

/**
 * Homepage
 */
export default class Homepage extends React.Component<
  HomepageProps,
  HomepageState
> {

  static state: {}
  static defaultProps: {}

  render() {
    return (
      <Wrapper>
        <Card>
          <Title>NextJS + StyledComponents + Tachyons</Title>
        </Card>
      </Wrapper>
    )
  }
}