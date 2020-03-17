import React from "react";
import TracksContainer from "./tracks/TracksContainer";
import Search from "./search/Search";

const Index = () => {
  return (
    <div>
      <Search />

      <TracksContainer />
    </div>
  );
};
export default Index;
