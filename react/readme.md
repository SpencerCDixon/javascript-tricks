## React Specific

**Smart Components**: Are aware of the state of the app and are responsible for
passing down props to 'dumb' components whose job is to render.

**Dumb Components**: also known as 'pure' components. They are responsible for
rendering data that are passed down to them via props.  Dumb components are very
modular and interchangeable.  They shouldn't be concerned with where the data is
coming from or what Flux implementation is used to store/fetch data.
