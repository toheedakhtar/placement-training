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
