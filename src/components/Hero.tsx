import { timeline, type Easing, stagger } from "motion";
import { Show, createSignal, createUniqueId, onMount } from "solid-js";
import { Flex, panda } from "../../styled-system/jsx";
import { Container } from "./ui/Container";
import { css } from "../../styled-system/css";

const easeInQuart = [0.895, 0.03, 0.685, 0.22] as Easing;
const easeOutQuart = [0.215, 0.61, 0.355, 1] as Easing;
const easeOutCubic = [0.32, 0, 0.67, 0] as Easing;
const easeInOutCubic = [0.65, 0, 0.35, 1] as Easing;
const easeInOutQuart = [0.76, 0, 0.24, 1] as Easing;

export const Hero = () => {
  let pageIds = Array.from({ length: 2 }, () => createUniqueId());
  let progressBar: SVGLineElement;

  let [currentPage, setCurrentPage] = createSignal(0);

  onMount(async () => {
    const play = async () => {
      const animation = timeline([
        //intro
        [
          `#${pageIds[currentPage()]} span`,
          {
            transform: ["translateX(4rem)", "translateX(0%)"],
            opacity: [0, 1],
          },
          { duration: 0.75, easing: easeOutQuart, delay: stagger(0.1) },
        ],

        [
          progressBar,
          {
            opacity: 1,
          },
          {
            duration: 1,
            easing: easeInOutCubic,
            at: "<",
          },
        ],
        [
          progressBar,
          {
            strokeDashoffset: [1, 0],
            transform: ["translateX(0%)", "translateX(0%)"],
          },
          {
            duration: 6,
            easing: easeInOutCubic,
            at: "<",
          },
        ],

        // outro
        [
          progressBar,
          {
            opacity: [1, 0, 1, 0, 1, 0],
          },
          {
            duration: 0.5,
            easing: easeInOutQuart,
          },
        ],
        [
          `#${pageIds[currentPage()]} span`,
          {
            transform: "translateX(-1rem)",
            opacity: 0,
          },
          {
            duration: 0.5,
            easing: easeOutCubic,
            delay: stagger(0.1),
            at: "<",
          },
        ],
      ]);

      await animation.finished;

      setCurrentPage((currentPage) => (currentPage + 1) % 2);
    };

    while (true) {
      await play();
    }
  });

  return (
    <Flex flexDirection="column" minHeight="min(calc(100vh - 9rem), 50rem)">
      <Flex
        flexGrow={1}
        flexDirection="column"
        justifyContent="center"
        lineHeight={1.2}
        fontSize="9vw"
        md={{ fontSize: "min(6vw, 112.5px)" }}
        overflow="hidden"
        class={css({
          "& span": {
            display: "inline-block",
            transition: "all 0.5s",
            opacity: 0,
          },
          "& span:hover": {
            fontWeight: 600,
          },
        })}
      >
        <Container>
          <Show when={currentPage() === 0}>
            <panda.div id={pageIds[0]}>
              <panda.div fontWeight={200}>
                <span>Hi!</span> <span>I am</span>{" "}
                <panda.span fontWeight={900}>Richard Boomsma</panda.span>
              </panda.div>
              <panda.div fontWeight={400}>
                <span>Creative</span>{" "}
                <panda.span fontWeight={800}>web</panda.span>{" "}
                <span>developer</span>
              </panda.div>
            </panda.div>
            {/* <Image src={} /> */}
          </Show>

          <Show when={currentPage() === 1}>
            <panda.div id={pageIds[1]}>
              <panda.div fontWeight={800}>
                <span>Eat,</span> <span>Sleep,</span> <span>Code, </span>{" "}
                <span>Repeat.</span>
              </panda.div>
            </panda.div>
          </Show>
        </Container>
      </Flex>
      <Container>
        <Flex
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          gap={10}
          fontSize="0.9rem"
          fontFamily="noto-mono"
          letterSpacing={-1.5}
        >
          <div>{currentPage() === 0 ? "01" : "02"}</div>
          <panda.svg
            flexGrow={1}
            height="2px"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <panda.line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="gray.300"
              stroke-width="100"
            />
            <panda.line
              x1="0"
              y1="0"
              x2="100"
              y2="0"
              stroke="gray.900"
              stroke-width="100"
              stroke-dasharray="1"
              stroke-dashoffset="1"
              pathLength="1"
              ref={progressBar!}
            />
          </panda.svg>
          <div>{currentPage() === 0 ? "02" : "01"}</div>
        </Flex>
      </Container>
    </Flex>
  );
};
