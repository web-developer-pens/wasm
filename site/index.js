const js = import("./node_modules/@mojila/hello-wasm/hello_wasm");

js.then(js => {
    js.greet("WebAssembly");
});