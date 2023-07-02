interface RedClock {
	Pause(): undefined;
	Resume(): undefined;
	Advance(Delta: number): undefined;
}

interface ClockClass {
	new (Interval: number, Callback: () => void): RedClock;
}

export type Clock = RedClock;
export default ClockClass;
