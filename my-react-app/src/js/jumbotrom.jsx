import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Jumbotron = () => {
  return (
    <div class="jumbotron mt-3">
  <h1 class="display-4">Hello, world! Welcome React!</h1>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  );
};

export default Jumbotron;
