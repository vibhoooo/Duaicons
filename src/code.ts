figma.showUI(__html__, { width: 300, height: 450 });
figma.ui.onmessage = async (msg) => {
	const { values } = msg;
	const icon = figma.createNodeFromSvg(values.content);
	icon.name = values.name;
	icon.backgrounds = [
		{ type: "SOLID", opacity: 0, color: { r: 0, g: 0, b: 0 } },
	];
	icon.x = figma.viewport.center.x;
	icon.y = figma.viewport.center.y;
	icon.resize(100, 100);
	figma.currentPage.appendChild(icon);
	figma.currentPage.selection = [icon];
	figma.viewport.scrollAndZoomIntoView([icon]);
};

