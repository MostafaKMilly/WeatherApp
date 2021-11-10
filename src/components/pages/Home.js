import React from "react";
import Header from "../UI/Header";
import TodosSection from "../todos/TodosSection";

function Home(props) {
  return (
    <div>
      <Header />
      <TodosSection />
    </div>
  );
}

export default Home;
