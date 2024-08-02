import { lenis } from "src/constants/lenis";
import { Container, Flex, panda } from "styled-system/jsx";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
export const HeaderMenu = (props: Props) => {
  return (
    <panda.div
      position="fixed"
      zIndex={100}
      top="0"
      right="0"
      left={{ base: "0", md: "unset" }}
      height="100vh"
      transition="all .85s cubic-bezier(.7, 0, .2, 1)"
      style={{
        transform: props.isOpen
          ? "translateX(0%)"
          : "translateX(calc(100% + 6vw))",
      }}
    >
      <panda.div
        position="absolute"
        height="100%"
        top="0"
        left="0"
        zIndex={-1}
        transition="all .85s cubic-bezier(.7, 0, .2, 1)"

        style={{
          width: props.isOpen ? "1vw" : "6vw",
        }}
      >
        <panda.div
          height="150%"
          content=""
          display="block"
          position="absolute"
          backgroundColor="slate.800"
          width="750%"
          left="50%"
          borderRadius="50%"
          transform="translate(-20%,-16.33%)"
          zIndex="1"
          shadow="2xl"
        />
      </panda.div>
      <Flex
        height="100%"
        flexDirection="column"
        justifyContent="space-between"
        padding="15vh 7.5vw 10vh 7.5vw"
        backgroundColor="slate.800"
      >
        <panda.button
          position="absolute"
          top="0"
          right="min(4vw, 4rem)"
          marginTop="12"
          color="slate.200"
          onclick={props.onClose}
          cursor="pointer"
        >
          • CLOSE
        </panda.button>
        <Flex
          flexDirection="column"
          textAlign="left"
          css={{
            "& a": {
              color: "slate.200",
              textAlign: "left",
              fontSize: "5xl",
              transition: "all",
              transitionDuration: "1s",
              transitionTimingFunction: "cubic-bezier(.7, 0, .2, 1)",
              transform: props.isOpen ? "translateX(0)" : "translateX(20rem)",
              "&:hover": {
                color: "slate.400",
              },
            },
          }}
        >
          <panda.h3
            color="slate.400"
            paddingBottom="4"
            marginBottom="10"
            borderBottom="1px solid"
            borderBottomColor="slate.200"
          >
            NAVIGATION
          </panda.h3>
          <panda.a
            href="#about"
            onclick={() => {
              props.onClose();
              lenis?.scrollTo("#about", { lerp: 0 });
            }}
          >
            ABOUT
          </panda.a>
          <panda.a
            href="#experience"
            onclick={() => {
              props.onClose();
              lenis?.scrollTo("#experience", { lerp: 0 });
            }}
            transitionDelay="0.05s"
          >
            EXPERIENCE
          </panda.a>
          <panda.a
            href="#contact"
            onclick={() => {
              props.onClose();
              lenis?.scrollTo("#contact", { lerp: 0 });
            }}
            transitionDelay="0.1s"
          >
            CONTACT
          </panda.a>
          <panda.a href="/resume" transitionDelay="0.15s">
            RESUME
          </panda.a>
        </Flex>
        <Flex
          flexDirection="column"
          paddingTop="4"
          borderTopWidth="1px"
          borderTopStyle="solid"
          borderTopColor="slate.100"
        >
          <panda.div fontSize="sm" color="slate.400">
            Socials
          </panda.div>
          <Flex gap="10" color="slate.200">
            <panda.a href="https://instagram.com/spaaacetoast/">
              Instagram
            </panda.a>
            <panda.a href="https://linkedin.com/in/richard-boomsma">
              Linkedin
            </panda.a>
            <panda.a href="https://github.com/spaaacetoast">GitHub</panda.a>
          </Flex>
        </Flex>
      </Flex>
    </panda.div>
  );
};
