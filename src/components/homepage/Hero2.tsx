import richWithCamWide from "@assets/images/rich-with-cam-wide.jpg";
import { animate, scroll } from "motion";
import { onMount } from "solid-js";
import { easeOutExpo } from "src/constants/easing";
import { Flex, panda } from "styled-system/jsx";

const initialPositionAnimation = "translateY(max(-200px, -10vw))";

export const Hero = () => {
  let wrapper: HTMLDivElement;
  let image: HTMLImageElement;
  let text: HTMLDivElement;

  onMount(() => {
    scroll(
      animate(image, {
        transform: [initialPositionAnimation, "translateY(min(25vh,20vw))"],
      }),
      {
        target: wrapper,
        offset: [`${-wrapper.offsetTop}px`, "end start"],
      }
    );

    animate(
      wrapper,
      {
        opacity: [0, 1],
      },
      {
        easing: easeOutExpo,
        duration: 1,
      }
    );

    scroll(
      animate(text, {
        transform: ["translateY(0vh)", "translateY(50vh)"],
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
      padding="4"
      overflow="hidden"
    >
      <panda.div
        ref={text!}
        paddingTop="15vw"
        paddingBottom="2vw"
        textAlign="right"
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
