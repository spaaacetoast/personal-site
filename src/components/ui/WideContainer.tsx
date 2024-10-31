import type { ParentComponent } from "solid-js";
import { panda } from "styled-system/jsx";

export const WideContainer: ParentComponent = (props) => (
	<panda.div paddingX="min(4vw, 4rem)">
		<panda.div maxWidth="112.5rem" marginX="auto">
			{props.children}
		</panda.div>
	</panda.div>
);
