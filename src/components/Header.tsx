import { Flex, panda } from "styled-system/jsx";
import { Container } from "./ui/Container";
import { createEffect, createSignal, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { animate, stagger } from "motion";
import { easeInOutExpo } from "src/constants/easing";
import { css } from "styled-system/css";

export const Header = () => {
  const [isAtTop, setIsAtTop] = createSignal(true);
  let headerLinks: HTMLAnchorElement[] = Array.from({ length: 3 });

  onMount(() => {
    if (!isServer) {
      window.onscroll = () => {
        // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        var currentPosition = document.documentElement.scrollTop;
        const _atTop = currentPosition < 25;
        if (isAtTop() != _atTop) {
          setIsAtTop(_atTop);
        }
      };
    }
  });

  return (
    <panda.div position="fixed" zIndex={10} width="100%" backgroundColor="red">
      <Container>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          paddingY={2}
          fontFamily="noto-mono"
        >
          <panda.a fontSize="3rem" fontWeight={800} letterSpacing="-0.2rem">
            obscure
          </panda.a>
          <Flex gap={2} alignItems="center">
            <panda.div
              display="inline-block"
              position="relative"
              rounded={9999}
              height={2}
              width={2}
              bgColor="green.500"
            >
              <panda.span
                display="inline-block"
                position="absolute"
                rounded={9999}
                height={2}
                width={2}
                bgColor="green.500"
                animation="ping"
                animationDuration="3s"
              />
            </panda.div>
            available for new projects
          </Flex>
          <Flex
            gap={12}
            overflow="hidden"
            class={css({
              "& > a": {
                transition: "all",
                transitionDuration: "0.5s",
                transform: isAtTop() ? `translateY(0%)` : `translateY(-150%)`,
                transitionTimingFunction: "cubic-bezier(.5,.5,0,1)",
              },
            })}
          >
            <panda.a ref={headerLinks[0]}>PORTFOLIO</panda.a>
            <panda.a ref={headerLinks[1]} transitionDelay="0.15s">
              ABOUT
            </panda.a>
            <panda.a ref={headerLinks[2]} transitionDelay="0.3s">
              CONTACT
            </panda.a>
          </Flex>
        </Flex>
      </Container>
    </panda.div>
  );
};
