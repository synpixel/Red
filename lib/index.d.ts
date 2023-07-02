import { Server as RedServer, Client as RedClient } from "./Net";
import * as RedPromise from "./Util/Promise";
import RedSignal from "./Util/Signal";
import RedClock from "./Util/Clock";
import RedCollection from "./Util/Collection";
import RedRatelimit from "./Util/Ratelimit";
import RedSpawn from "./Util/Spawn";
import RedBin from "./Util/Bin";

export declare const Server: (Name: string) => RedServer;
export declare const Client: (Name: string) => RedClient;

export declare const Promise: RedPromise.default;
export declare const Signal: RedSignal;
export declare const Clock: RedClock;
export declare const Collection: typeof RedCollection;
export declare const Ratelimit: typeof RedRatelimit;
export declare const Spawn: typeof RedSpawn;
export declare const Bin: typeof RedBin;

export type Server = RedServer;
export type Client = RedClient;
export type Promise = RedPromise.Promise;
export type Signal = RedSignal;
export type Clock = RedClock;
export type Collection = typeof RedCollection;
export type Ratelimit = typeof RedRatelimit;
