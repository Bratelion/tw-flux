import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Drawer } from "..";

const App: React.FC = () => (
  <div className="p-4">
    <h2>Drawer component</h2>
    
    <Drawer>
      <Drawer.Title>
        <h2>What are the different types of web design?</h2>
      </Drawer.Title>
      <Drawer.Body>
        <p>
          There are various types of web designs to match different types of
          websites. Here are a few examples:
        </p>
        <ul>
          <li>
            Single page design: Ideal for small projects or simple content
            presentation. It's concise and delivers information on a single
            scrollable page.
          </li>
          <li>
            Dynamic page design: Suited for scaling websites with changing
            content. It allows for easy updates and expansion as your content
            grows.
          </li>
          <li>
            Adaptive page design: Ensures a seamless user experience across
            different devices and screen sizes. It adjusts the layout and
            content presentation accordingly.
          </li>
        </ul>
        <a className="mt-4" href="https://www.wix.com/blog/website-layouts">
          Learn more about website layouts
        </a>
      </Drawer.Body>
    </Drawer>
  </div>
);

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
