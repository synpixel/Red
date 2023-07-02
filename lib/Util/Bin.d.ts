declare function Bin(): LuaTuple<
	[(Object: Instance | RBXScriptConnection | (() => LuaTuple<any>)) => void, () => undefined]
>;

export = Bin;
