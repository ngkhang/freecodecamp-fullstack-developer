const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
	const [isDisabledBtn, setIsDisabledBtn] = useState(false);
	const [otp, setOtp] = useState(null);
	const [time, setTime] = useState(null);

	const handleGeneratorOtp = () => {
		setOtp(Math.floor(Math.random() * 1000000));
		setIsDisabledBtn(true);
		setTime(5);
	};

	useEffect(() => {
		if (time === null || time === 0) return;

		const timeOutId = setTimeout(() => {
			if (time > 1) setTime(time - 1);
			else {
				setIsDisabledBtn(false);
				setTime(0);
			}
		}, 1000);

		return () => clearTimeout(timeOutId);
	}, [time]);

	const setTimerText = () => {
		if (time === null) return "";
		return time > 0
			? `Expires in: ${time} seconds`
			: "OTP expired. Click the button to generate a new OTP.";
	};

	return (
		<div className="container">
			<h1 id="otp-title">OTP Generator</h1>
			<h2 id="otp-display">
				{otp ? otp : "Click 'Generate OTP' to get a code"}
			</h2>

			<p id="otp-timer" aria-live="assertive">
				{setTimerText()}
			</p>
			<button
				id="generate-otp-button"
				disabled={isDisabledBtn}
				onClick={handleGeneratorOtp}
			>
				Generate OTP
			</button>
		</div>
	);
};
