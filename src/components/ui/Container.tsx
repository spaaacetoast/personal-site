import { type ParentComponent } from "solid-js";
import { Container as PandaContainer, panda } from "styled-system/jsx";

export const Container: ParentComponent = (props) => (
  <panda.div paddingX={{ base: 1.5, sm: 2, md: 2.5, lg: 3 }}>
    <panda.div maxWidth="112.5rem" marginX="auto">
      {props.children}
    </panda.div>
  </panda.div>
);
