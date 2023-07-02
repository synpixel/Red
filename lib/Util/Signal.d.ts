import { Promise } from "./Promise";

interface RedSignal<T extends any[]> {
	Connect(Callback: (...Args: T) => void): () => undefined;
	Fire(...Args: T): undefined;
	Wait(): Promise;
	DisconnectAll(): undefined;
}

interface SignalClass {
	new <T extends any[]>(): RedSignal<T>;
}

export type Signal<T extends any[]> = RedSignal<T>;
export default SignalClass;
