import { Promise } from "../Util/Promise";

interface Server {
	Fire(Player: Player, Event: string, ...Args: any[]): undefined;
	FireAll(Event: string, ...Args: any[]): undefined;
	FireAllExcept(Player: Player, Event: string, ...Args: any[]): undefined;
	FireList(Players: Player[], Event: string, ...Args: any[]): undefined;
	FireWithFilter(Filter: (Player: Player) => boolean, Event: string, ...Args: any[]): undefined;
	On(Event: string, Callback?: (Player: Player, ...Args: any[]) => LuaTuple<any>): undefined;
	Folder(Player?: Player): Folder;
}

interface Client {
	Fire(Event: string, ...Args: any[]): Promise;
	Call(Event: string, ...Args: any[]): Promise;
	On(Event: string, Callback: (...Args: any[]) => void): Promise;
	Folder(): Folder;
	LocalFolder(): Folder;
}

declare const Server: Server;
declare const Client: Client;
