# Module Federation - React Router DOM Example

This example shows how to handle independent and nested routings in a MFE V 2 setup based on [webpack-module-federation](https://module-federation.io/). The setup consists of:

- `shell` is the host application and loads `app1` and `app2` at runtime, and is the only component responsible for updating browser url. The two level of history strategies (browser + in-memory) are kept in sync through an event-based communication between shell and remotes.
- `app2` is a standalone application .
- `app3` is a standalone application that exposes `Button` component.

<br>

# Change names for app1 and app2

<br>

# Running Demo

app1 cd app1 run npm i and the npm start
app2 cd app run npm i and the npm start
shell cd app run npm i and the npm start

<br>

# Credits

Inspired to https://github.com/RussellCanfield.
