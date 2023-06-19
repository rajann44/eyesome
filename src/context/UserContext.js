export function UserContextProvider(props) {
  // you can insert some code that calculates and changes the value of the context here

  return (
    <UsereContext.Provider value={{}}>
      {" "}
      //here you can provide a new value for the context
      {props.children}
    </UsereContext.Provider>
  );
}
