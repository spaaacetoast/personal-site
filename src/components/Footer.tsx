import { ScrollOffset, animate, scroll } from "motion";
import { onMount } from "solid-js";
import { Flex, panda } from "styled-system/jsx";
import { Container } from "./ui/Container";

export const Footer = () => {
  let wrapper: HTMLDivElement;
  let inner: HTMLDivElement;
  let bulge: HTMLDivElement;

  onMount(() => {
    scroll(
      animate(inner, {
        transform: [
          "translateY(-50vh) translateZ(0)",
          "translateY(0px) translateZ(0)",
        ],
      }),
      {
        target: wrapper,
        offset: [`start end`, "end"],
      }
    );

    scroll(
      animate(bulge, {
        height: ["20vw", "5vw"],
      }),
      {
        target: wrapper,
        offset: [`start end`, "end"],
      }
    );
  });

  return (
    <>
      <panda.footer
        ref={wrapper!}
        id="contact"
        overflow="hidden"
        position="relative"
      >
        <panda.div
          ref={bulge!}
          position="absolute"
          width="100%"
          top="0"
          zIndex="1"
        >
          <panda.div
            width="300%"
            content=""
            display="block"
            position="absolute"
            backgroundColor="white"
            height="750%"
            left="50%"
            borderRadius="50%"
            transform="translate(-50%, -86.666%)"
            zIndex="1"
          />
        </panda.div>
        <Flex
          ref={inner!}
          paddingTop="20vh"
          paddingBottom="10"
          marginBottom="-10"
          backgroundColor="slate.900"
          color="gray.200"
          flexDirection="column"
        >
          <Flex
            alignItems={{ base: "stretch", md: "center" }}
            flexDirection="column"
            gap="4"
            padding="4"
          >
            <panda.h1 fontSize="clamp(3rem, 20vw, 8rem)">Let's chat!</panda.h1>
            <panda.a
              href="mailto:obscuresoftware@proton.me"
              padding="4"
              borderWidth="thin"
              borderColor="slate.100"
              borderStyle="solid"
              rounded="full"
              transitionDuration="0.1s"
              textAlign="center"
              _hover={{
                backgroundColor: "slate.100",
                color: "slate.900",
                scale: "1.1",
              }}
            >
              obscuresoftware@proton.me
            </panda.a>
            <panda.a
              href="tel:+31637327422"
              padding="4"
              borderWidth="thin"
              borderColor="slate.100"
              borderStyle="solid"
              rounded="full"
              transitionDuration="0.1s"
              textAlign="center"
              _hover={{
                backgroundColor: "slate.100",
                color: "slate.900",
                scale: "1.1",
              }}
            >
              +31 6 37 32 74 22
            </panda.a>
          </Flex>
          <Container>
            <Flex
              justifyContent="space-between"
              paddingTop="20vh"
              paddingBottom="8"
              flexDirection={{ base: "column-reverse", md: "row" }}
              gap="4"
            >
              <panda.div
                alignSelf={{ base: "center", md: "end" }}
                color="slate.500"
              >
                2023 - Richard Boomsma - Obscure Software
              </panda.div>
              <Flex
                flexDirection="column"
                paddingBottom="4"
                alignItems={{ base: "center", md: "start" }}
                borderBottom={{ base: "1px solid", md: "none" }}
                borderColor="gray.400"
              >
                <panda.div fontSize="sm" color="gray.400">
                  Socials
                </panda.div>
                <Flex gap="10">
                  <panda.a href="https://instagram.com/spaaacetoast/">
                    Instagram
                  </panda.a>
                  <panda.a href="https://linkedin.com/in/richard-boomsma">
                    Linkedin
                  </panda.a>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        </Flex>
      </panda.footer>
    </>
  );
};
