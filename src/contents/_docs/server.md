---
title: 'Server'
date: '2021-27-07'
excerpt: 'Server'
---

# Server module

Açaí's server handles way more than HTTP requests, it's a complete infrastructure to enable you to use our middlewares, providers and error catching in any environment you desire, it may be a websocket server, REPL, NATS or anything you may dream of. Here we are going to teach you how to use the server, add and customize your own middlewares, adapters, globals and providers, and dig deeper into each of these helpers.

## Getting started

The server already comes with the HTTP adapter injected into it, but you can easily remove or plug your own into it.

``` typescript
import Server from "@acai/server"

async function main () {
	const server = new Server()
	
	// Will start http server
	await server.run()
}
```