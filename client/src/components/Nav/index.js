import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <ul className="navbar-nav">
        <li className="nav-item"> */}
          <a className="navbar-brand" href="/">
            Search
          </a>
        {/* </li>
        <li className="nav-item"> */}
          <a className= "navbar-brand" href="/save">
            Save
          </a>
        {/* </li> */}
        {store.loading ? (
          <a className="navbar-brand ml-auto">Loading...</a>
        ) : (
          <></>
        )}
      {/* </ul> */}
    </nav>
  );
}

export default Nav;
