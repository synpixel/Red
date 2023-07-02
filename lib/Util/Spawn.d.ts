declare function Spawn<T extends any[]>(fn: (...Args: T) => unknown, ...Args: T): undefined;

export = Spawn;
