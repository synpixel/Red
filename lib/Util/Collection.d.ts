declare function Collection<T>(Tag: string, Start: (Instance: Instance) => T, Stop: (Instance: T) => void): () => void;

export = Collection;
