# @rbxts/red

roblox-ts wrapper around [Red](https://github.com/jackdotink/Red).

## Example

### Server

```ts
import { Server, Clock } from "@rbxts/red";

const Net = Server("Net");

Clock(5, () => Net.FireAll("HelloWorld"));
```

### Client

```ts
import { Client } from "@rbxts/red";

const Net = Client("Net");

Net.On("HelloWorld", () => print("Hello, world!"));
```
