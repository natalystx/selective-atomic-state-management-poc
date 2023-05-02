# Selective Atomic State Management POC

[![IMAGE ALT TEXT](http://img.youtube.com/vi/f3Cn0CGytSQ/0.jpg)](http://www.youtube.com/watch?v=f3Cn0CGytSQ "Video Title")
**get inspire by this video**
**Concepts**

- No provider component
- Can using everywhere
- Minimal and lightweight

# How to use

<code>const {useStateSelector} = useStore();
const [state, setState] = useStateSelector(selector: string, initialValue: T);</code>

<p>You can put a block of code here on the component that you want to use a global state.</p>
<p><b>Caveats:</b> If the state has been updated it will be ignore the "initialValue" and using the current state instead</p>
