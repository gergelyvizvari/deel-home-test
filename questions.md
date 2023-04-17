> Q1. What is the difference between Component and PureComponent? give an example where it might break my app.

- PureComponents compare props and states by shallow comparion what helped to avoid unnecessary rerenders in class functions.

- Because of the shallow comparison it doesnt recognise if an object nested values or array changes (for e.g simply sorting the array)

> Q2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
> that?

- If any of it is relies of an asyncron source they might be will facing with race condition.

> Q3. Describe 3 ways to pass information from a component to its PARENT.

- pass an event to the children
- use state manager / context
- EventListener (parent listening an event what children can trigger)

> Q4. Give 2 ways to prevent components from re-rendering.

- use memo function
- useCallBack and useMemo hooks
- manipulating/getting data throught ref
- limit passed properties
- in class components use ShouldComponentUpdate

> Q5. What is a fragment and why do we need it? Give an example where it might break my app.

- fragment is an option to grouping elements without embedding them into an extra DOM element. So only fragments content is repres. React components cannot return with array of items
- the only thing that I can imagine to break app with it if we dont assume a component returning with a fragment what can break the display of the app.

> Q6. Give 3 examples of the HOC pattern.

React memo - optimise renders

```JavaScript
  const MyComponent = memo(({...props}) => {
    ...
  })
```

React forward ref - passing reference from parent

```JavaScript
  const MyComponent = React.forwardRef(({...props}, ref)=> {
    ...
    return <div ref={ref}>...</div>
  })
```

Fake auth
```JavaScript
  const withFakeAuth = (wrappedComponent)=>{
    const user = 'greg'
    return (props) => wrappedComponent(props, user)
  }

  const test = ( props, user ) => {
    return `${props.welcome} ${user}`
  };

  withFakeAuth(test)({welcome: 'hi'})
```

> Q7. what's the difference in handling exceptions in promises, callbacks and
async...await.

- promise is handle then(), catch() methods for error and success
- async await is built on promises errors can be handled by wrapping try...catch blocks
- i assume the question is about passing some like (data, error)=>{} to the target function

> Q8. How many arguments does setState take and why is it async.

- 2, 1st is the new state, 2nd is the callback function. 
- if it wouldnt async then in a more complex component the rerendes would be triggered to many times, also setState is applied by react not when we call it.

> Q9. List the steps needed to migrate a Class to Function Component.

- identify state variables from constructor
- transform class life cycle methods contructor, componentDidUpdate to hooks (useEffect)
- render method content will be the function return

> Q10. List a few ways styles can be used with components.

- inline
- import css file
- styled-components, emotion
- utility based styling

> Q11. How to render an HTML string coming from the server.

```JS
  <div dangerouslySetInnerHTML={{ __html: content }}></div>
```