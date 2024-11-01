import { createSignal, For, onMount } from "solid-js";
import { isServer } from "solid-js/web";
import { lenis } from "src/constants/lenis";
import { Flex, panda } from "styled-system/jsx";
import { HeaderMenu } from "./HeaderMenu";
import { WideContainer } from "./ui/WideContainer";

const topThreshold = 100;
const isMobile = () => window.innerWidth < 768;

export const Header = () => {
	const [isAtTop, setAtTop] = createSignal(false);
	const [isMenuOpen, setMenuOpen] = createSignal(false);
	const headerLinks: HTMLAnchorElement[] = Array.from({ length: 3 });

	onMount(() => {
		if (!isServer) {
			setAtTop(document.documentElement.scrollTop < topThreshold);

			window.onscroll = () => {
				const currentPosition = document.documentElement.scrollTop;
				const atTop = currentPosition < topThreshold;

				if (isAtTop() !== atTop) {
					setAtTop(atTop);
				}
			};
		}
	});

	return (
		<>
			<HeaderMenu isOpen={isMenuOpen()} onClose={() => setMenuOpen(false)} />
			<panda.div position="fixed" zIndex={10} width="100%">
				<WideContainer>
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
							letterSpacing="-0.35rem"
							marginTop="-1"
							href="#"
							onclick={() => lenis?.scrollTo(0, { lerp: 0 })}
						>
							<panda.div display="inline-block">o</panda.div>
							<For each={["b", "s", "c", "u", "r", "e"]}>
								{(letter, i) => (
									<panda.div
										display="inline-block"
										overflow="hidden"
										transition="transform"
										transitionTimingFunction="cubic-bezier(.86,0,.07,1)"
										transitionDuration="1s"
										style={{
											"transition-delay": `${i() * 0.05}s`,
											transform:
												!isServer && isAtTop()
													? "translateY(0%)"
													: "translateY(-50%)",
										}}
										paddingRight="2"
										marginRight="-2"
									>
										<panda.div
											display="inline-block"
											transform={
												!isServer && isAtTop()
													? "translateY(0%)"
													: "translateY(110%)"
											}
											transition="transform"
											transitionTimingFunction="cubic-bezier(.86,0,.07,1)"
											transitionDuration="1s"
											style={{
												"transition-delay": `${i() * 0.05}s`,
											}}
										>
											{letter}
										</panda.div>
									</panda.div>
								)}
							</For>
						</panda.a>
						<Flex
							gap={12}
							position="relative"
							overflow="hidden"
							css={{
								"& > a": {
									visibility: { base: "hidden", md: "visible" },
									transition: "all",
									transitionDuration: "1s",
									transform: isAtTop() ? "translateY(0%)" : "translateY(-150%)",
									transitionTimingFunction: "cubic-bezier(.86,0,.07,1)",
								},
								"& > button": {
									transition: "all",
									transitionDuration: "1s",
									transform:
										// TODO: for some reason there is a bug where the menu button is not visible when the view position is recovered on reload
										isServer || (isAtTop() && !isMobile())
											? "translateY(150%)"
											: "translateY(0%)", // This is than not applied while isAtTop() is false
									transitionTimingFunction: "cubic-bezier(.86,0,.07,1)",
								},
							}}
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
							<panda.a
								ref={headerLinks[2]}
								href="/resume"
								transitionDelay="0.45s"
							>
								RESUME
							</panda.a>

							<panda.button
								position="absolute"
								right="0"
								transitionDelay="0.45s"
								onclick={() => setMenuOpen(true)}
								cursor="pointer"
							>
								• MENU
							</panda.button>
						</Flex>
					</Flex>
				</WideContainer>
			</panda.div>
		</>
	);
};
