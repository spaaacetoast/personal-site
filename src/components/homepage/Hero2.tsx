import richWithCamWide from "@assets/images/rich-with-cam-wide.jpg";
import { animate, scroll } from "motion";
import { onMount } from "solid-js";
import { Flex, panda } from "styled-system/jsx";

const initialPositionAnimation = "translateY(max(-200px, -25vw)) translateZ(0)";

export const Hero = () => {
  let wrapper: HTMLDivElement;
  let image: HTMLImageElement;
  let text: HTMLDivElement;

  onMount(() => {
    scroll(
      animate(image, {
        transform: [
          initialPositionAnimation,
          "translateY(min(25vh,25vw)) translateZ(0)",
        ],
      }),
      {
        target: wrapper,
        offset: [`${-wrapper.offsetTop}px`, "end start"],
      }
    );

    scroll(
      animate(text, {
        transform: [
          "translateY(0vh) translateZ(0)",
          "translateY(125%) translateZ(0)",
        ],
      }),
      {
        target: wrapper,
        offset: [`${-wrapper.offsetTop}px`, "end start"],
      }
    );
  });

  return (
    <Flex
      ref={wrapper!}
      flexDirection="column"
      justifyContent="center"
      overflow="hidden"
    >
      <panda.div
        ref={text!}
        paddingTop="40vh"
        paddingBottom={{ base: "30vh", md: "10" }}
        textAlign={{ base: "center", md: "right" }}
      >
        <panda.p fontSize="6vw" fontWeight="black" color="gray.500">
          Full Stack Developer
        </panda.p>
        <panda.p fontSize="9vw" fontWeight="black" lineHeight="0.6">
          Richard Boomsma
        </panda.p>
      </panda.div>
      <panda.div
        overflow="hidden"
        rounded="3xl"
        position="relative"
        _before={{
          content: "''",
          display: "block",
          paddingTop: "calc(min(max(50%, 60vh), 100vh))",
        }}
      >
        <panda.img
          ref={image!}
          src={richWithCamWide.src}
          position="absolute"
          top="-5vw"
          objectFit="cover"
          minHeight="80vh"
          transform={initialPositionAnimation}
        ></panda.img>
      </panda.div>
    </Flex>
  );
};
