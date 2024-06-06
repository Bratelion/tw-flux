import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Accordion, List } from "..";

const App: React.FC = () => (
  <div className="p-4">
    <h2>Accordion component</h2>
    <Accordion autoClose>
      <Accordion.Title>
        <h2>What are the different types of web design?</h2>
      </Accordion.Title>
      <Accordion.Body>
        <p>
          There are various types of web designs to match different types of
          websites. Here are a few examples:
        </p>
        <List variant="unordered">
          <List.Item>
            <strong>Single page design:</strong> Ideal for small projects or
            simple content presentation. It's concise and delivers information
            on a single scrollable page.
          </List.Item>
          <List.Item>
            <strong>Dynamic page design:</strong> Suited for scaling websites
            with changing content. It allows for easy updates and expansion as
            your content grows.
          </List.Item>
          <List.Item>
            <strong>Adaptive page design:</strong> Ensures a seamless user
            experience across different devices and screen sizes. It adjusts the
            layout and content presentation accordingly.
          </List.Item>
        </List>
        <a className="mt-4" href="https://www.wix.com/blog/website-layouts">
          Learn more about website layouts
        </a>
      </Accordion.Body>
    </Accordion>
    <Accordion>
      <Accordion.Title>
        <h2>What are the different types of web design?</h2>
      </Accordion.Title>
      <Accordion.Body>
        <p>
          There are various types of web designs to match different types of
          websites. Here are a few examples:
        </p>
        <List variant="unordered">
          <List.Item>
            <strong>Single page design:</strong> Ideal for small projects or
            simple content presentation. It's concise and delivers information
            on a single scrollable page.
          </List.Item>
          <List.Item>
            <strong>Dynamic page design:</strong> Suited for scaling websites
            with changing content. It allows for easy updates and expansion as
            your content grows.
          </List.Item>
          <List.Item>
            <strong>Adaptive page design:</strong> Ensures a seamless user
            experience across different devices and screen sizes. It adjusts the
            layout and content presentation accordingly.
          </List.Item>
        </List>
        <a className="mt-4" href="https://www.wix.com/blog/website-layouts">
          Learn more about website layouts
        </a>
      </Accordion.Body>
    </Accordion>
  </div>
);

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
