#Rerefences
https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm

#How To Compile
<code>cd hello-wasm</code>

<code>wasm-pack build --scope your-npm-username</code>

<code>cd pkg</code>
<code>npm publish --access=public</code>

# How To Run
<code>cd site</code>
* if you're not install npm module yet
<code>npm install</code>
<code>npm run serve</code>