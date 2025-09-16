const { useState } = React;

export const ColorPicker = () => {
	const [color, setColor] = useState("#ffffff");

	const handleColor = (event) => {
		const newColor = event.target.value;
		setColor(newColor);
	};

	return (
		<div id="color-picker-container" style={{ backgroundColor: color }}>
			<p>Choose a color using the color input below:</p>
			<input
				id="color-input"
				type="color"
				name="color"
				value={color}
				onChange={handleColor}
			/>
		</div>
	);
};
