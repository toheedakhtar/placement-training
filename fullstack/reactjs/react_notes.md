# hooks - functions on steroids.
- def - Hooks allow us to "hook" into React features such as state and lifecycle methods.

# Hooks : 
## 1. useState(var, func) : used to dynamically change state on UI / to manipulate UI,
- ex : counter 
- const [count, setCount] = useState(0)	 --> useState(default value)
- count is the variable and setCount function will change the counts.
- ex :
``` 
counter = 0
const setCounter = () => {
	counter = counter + 1;
}
<button onClick=setCounter>{counter}</button>

```
[W3 link](https://www.w3schools.com/react/react_usestate.asp)

## 2. useEffect(func, dependencies) : used to perform side effects on components such as fetching data, updating DOM, timers. It runs on every renders of dependencies.
- ex : counter
- useEffect((func)[dependecies]); --> [dependencies]
- on a change in dependecy (render), useEffect funtion will run.
- 3 steps/cycle in useEffect :
	- on initial,
	- state change
	- cleanup --> by using render
```
const [count, setCount] = useState(0);

useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
 
<p>{counter}</p> 
```
above will increment counter inf times, even though it should run once because every counter increment renders a new counter. To avoid this use dependencies. using [] empty dependency will make useEffect to run on inital render only.

```
const [count, setCount] = useState(0);

useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);	// empty dependecy
 
<p>{counter}</p> 
```
cleanup for above example, it uses return.

```
const [count, setCount] = useState(0);

useEffect(() => {
     setTimeout(() => {
	setCount((count) => count + 1);
    }, 1000);

     return () => clearTimeout(timer)
     }, []);	// empty dependency;

<p>{counter}</p> 
```
[w3 link - useEffect](https://www.w3schools.com/react/react_useeffect.asp)

## 3. useContext : helps avoid prop-drilling

prop-drilling : Prop drilling occurs when prop needs to be passed through multiple components to reach a deeply nested child component that actually needs the prop.

- allows to pass data/context without props, through context API,
- create a folder context/filename.js/jsx in src,
- now wrap the components you want to pass the context to under `<contextname.Provider value={your_context}>`
- you can use useContext(imported_context_from_context/file) to pass/call values, avoiding prop drilling,

## 4. useRef()
- can be passed to ref in input
- returns the component, though which you can get the Value,


