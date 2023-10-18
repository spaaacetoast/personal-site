import richWithCamWide from "@assets/images/rich-with-cam-wide.jpg";
import { Flex, panda } from "styled-system/jsx";

export const Hero = () => {
  return (
    <Flex
      minHeight="50vh"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
    >
      <panda.p fontSize="8vw" fontWeight="black">
        Richard Boomsma
      </panda.p>
      <img src={richWithCamWide.src}></img>
    </Flex>
  );
};
