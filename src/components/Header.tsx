import { createSignal, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { lenis } from "src/constants/lenis";
import { css } from "styled-system/css";
import { Flex, panda } from "styled-system/jsx";
import { Container } from "./ui/Container";

const topThreshold = 100;
const isMobile = () => window.innerWidth < 768;

export const Header = () => {
  const [isCompacted, setCompacted] = createSignal(true);
  let headerLinks: HTMLAnchorElement[] = Array.from({ length: 3 });

  onMount(() => {
    if (!isServer) {
      setCompacted(
        document.documentElement.scrollTop > topThreshold || isMobile()
      );

      if (isMobile()) return;

      window.onscroll = () => {
        var currentPosition = document.documentElement.scrollTop;
        const atTop = currentPosition > topThreshold;
        if (isCompacted() !== atTop) {
          setCompacted(atTop);
        }
      };
    }
  });

  return (
    <panda.div position="fixed" zIndex={10} width="100%">
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          paddingTop="6"
          fontFamily="noto-mono"
        >
          <panda.a
            display="flex"
            fontSize="3rem"
            fontWeight={800}
            letterSpacing="-0.2rem"
            marginTop="-1"
            href="#"
            onclick={() => lenis?.scrollTo(0, { lerp: 0 })}
          >
            <panda.div display="inline-block">o</panda.div>
            {["b", "s", "c", "u", "r", "e"].map((letter, i) => (
              <panda.div
                display="inline-block"
                overflow="hidden"
                transform={
                  !isServer && isCompacted()
                    ? "translateY(-50%)"
                    : "translateY(0%)"
                }
                transition="transform"
                transitionTimingFunction="cubic-bezier(.86,0,.07,1)"
                transitionDuration="1s"
                style={{
                  "transition-delay": `${i * 0.05}s`,
                }}
                paddingRight="2"
                marginRight="-2"
              >
                <panda.div
                  display="inline-block"
                  transform={
                    !isServer && isCompacted()
                      ? "translateY(110%)"
                      : "translateY(0%)"
                  }
                  transition="transform"
                  transitionTimingFunction="cubic-bezier(.86,0,.07,1)"
                  transitionDuration="1s"
                  style={{
                    "transition-delay": `${i * 0.05}s`,
                  }}
                >
                  {letter}
                </panda.div>
              </panda.div>
            ))}
          </panda.a>
          <Flex
            gap={12}
            position="relative"
            overflow="hidden"
            class={css({
              "& > a": {
                visibility: { base: "hidden", md: "visible" },
                transition: "all",
                transitionDuration: "1s",
                transform: isCompacted()
                  ? `translateY(-150%)`
                  : `translateY(0%)`,
                transitionTimingFunction: "cubic-bezier(.86,0,.07,1)",
              },
              "& > button": {
                transition: "all",
                transitionDuration: "1s",
                transform:
                  !isServer && isCompacted()
                    ? `translateY(0%)`
                    : `translateY(150%)`,
                transitionTimingFunction: "cubic-bezier(.86,0,.07,1)",
              },
            })}
          >
            <panda.a
              ref={headerLinks[0]}
              href="#about"
              onclick={() => lenis?.scrollTo("#about", { lerp: 0 })}
            >
              ABOUT
            </panda.a>
            <panda.a
              ref={headerLinks[1]}
              href="#experience"
              onclick={() => lenis?.scrollTo("#experience", { lerp: 0 })}
              transitionDelay="0.15s"
            >
              EXPERIENCE
            </panda.a>
            <panda.a
              ref={headerLinks[2]}
              href="#contact"
              onclick={() => lenis?.scrollTo("#contact", { lerp: 0 })}
              transitionDelay="0.3s"
            >
              CONTACT
            </panda.a>

            <panda.button position="absolute" right="0" transitionDelay="0.3s">
              • MENU
            </panda.button>
          </Flex>
        </Flex>
      </Container>
    </panda.div>
  );
};