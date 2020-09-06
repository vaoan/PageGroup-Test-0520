import React from "react";

const Dashboard = () => {
  return (
    <>
      <main role="main" className="container">
        <h1 className="mt-5">Sticky footer</h1>
        <p className="lead">
          Pin a fixed-height footer to the bottom of the viewport in desktop
          browsers with this custom HTML and CSS.
        </p>
        <p>
          Use{" "}
          <a href="../sticky-footer-navbar/">
            the sticky footer with a fixed navbar
          </a>{" "}
          if need be, too.
        </p>
      </main>

      <footer className="footer">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
    </>
  );
};

export default Dashboard;
