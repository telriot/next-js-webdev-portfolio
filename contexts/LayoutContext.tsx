import React from "react";

type Action =
	| { type: "toggleMenu" }
	| { type: "closeMenu" }
	| { type: "disableMenu" };
type Dispatch = (action: Action) => void;

type State = {
	isMenuVisible: boolean;
	isMenuRendered: boolean;
};

const LayoutStateContext = React.createContext<State | undefined>(undefined);
const LayoutDispatchContext = React.createContext<Dispatch | undefined>(
	undefined
);

const layoutReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "toggleMenu": {
			return {
				...state,
				isMenuVisible: !state.isMenuVisible,
				isMenuRendered: true,
			};
		}
		case "closeMenu": {
			return {
				...state,
				isMenuVisible: false,
			};
		}
		case "disableMenu": {
			return {
				...state,
				isMenuRendered: false,
			};
		}

		default: {
			return state;
		}
	}
};

const LayoutProvider = ({ children }: { children: any }) => {
	const [layoutState, layoutDispatch] = React.useReducer(layoutReducer, {
		isMenuVisible: false,
		isMenuRendered: false,
	});

	return (
		<LayoutStateContext.Provider value={layoutState}>
			<LayoutDispatchContext.Provider value={layoutDispatch}>
				{children}
			</LayoutDispatchContext.Provider>
		</LayoutStateContext.Provider>
	);
};

function useLayoutState() {
	const context = React.useContext(LayoutStateContext);
	if (context === undefined) {
		throw new Error("useLayoutState must be used within a LayoutProvider");
	}
	return context;
}
function useLayoutDispatch() {
	const context = React.useContext(LayoutDispatchContext);
	if (context === undefined) {
		throw new Error("useLayoutDispatch must be used within a LayoutProvider");
	}
	return context;
}

export { LayoutProvider, useLayoutState, useLayoutDispatch };
