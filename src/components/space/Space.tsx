import { type ReactNode, Children } from "react";
import styled from "styled-components";
import { Width } from "../variable";

interface SpacePorps {
  children: ReactNode
  spacing?: number | string
  justifyContent?: "start" | "end"
  spaceItem?: number
}

interface StyleSpaceProps {
  justifyContent?: "start" | "end"
  spaceItem?: number
}

const SpaceContainer = styled.div<StyleSpaceProps>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "start"};
  column-gap: ${(props) => (props.spaceItem ? `${props.spaceItem}px` : "1rem")};

  .space_firt_item {
    padding-left: 0;
  }

  .space_last_item {
    padding-right: 0;
  }
`;

const SpaceItem = styled.div`
  button {
    min-width: ${Width.w180};
  }
`;

export default function Space(props: SpacePorps) {
  const { children, justifyContent, spaceItem } = props;

  const arrayChilds = Children.toArray(children);

  return (
    <SpaceContainer
      justifyContent={justifyContent}
      spaceItem={spaceItem}
    >
      {
        arrayChilds.map((child, index) => {
          const lastItem = arrayChilds.length - 1;
          return (
            <SpaceItem
              key={index}
              className={index === 0 ? "space_firt_item" : index === lastItem ? "space_last_item" : ""}>
              { child }
            </SpaceItem>
          );
        })
      }
    </SpaceContainer>
  );
}
