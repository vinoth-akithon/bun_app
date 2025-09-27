import concurrently from "concurrently";

concurrently([
    {
        name: "Server",
        command: "bun start",
        cwd: "packages/server",
        prefixColor: "green"
    },
    {
        name: "Client",
        command: "bun start",
        cwd: "packages/client",
        prefixColor: "yellow"
    }
])