interface RedPromise {
	Then(OnResolve?: (...Args: any[]) => LuaTuple<any>, OnReject?: (...Args: any[]) => LuaTuple<any>): RedPromise;
	Catch(OnReject?: (...Args: any[]) => LuaTuple<any>): RedPromise;
	Finally(OnFinally?: (...Args: any[]) => LuaTuple<any>): RedPromise;
	Await(): LuaTuple<any>;
}

interface PromiseClass {
	new (Callback: (Resolve: (...Args: any[]) => void, Reject: (...Args: any[]) => void) => void): RedPromise;
	Resolve(...Args: any[]): RedPromise;
	Reject(...Args: any[]): RedPromise;
}

export type Promise = RedPromise;
export default PromiseClass;
