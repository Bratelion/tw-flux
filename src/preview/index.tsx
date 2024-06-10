import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Accordion, Dropdown, Link, List } from "..";

const App: React.FC = () => (
  <div className="p-4">
    <Accordion autoClose>
      <Accordion.Title>Accordion component</Accordion.Title>
      <Accordion.Body>
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
                simple content presentation. It's concise and delivers
                information on a single scrollable page.
              </List.Item>
              <List.Item>
                <strong>Dynamic page design:</strong> Suited for scaling
                websites with changing content. It allows for easy updates and
                expansion as your content grows.
              </List.Item>
              <List.Item>
                <strong>Adaptive page design:</strong> Ensures a seamless user
                experience across different devices and screen sizes. It adjusts
                the layout and content presentation accordingly.
              </List.Item>
            </List>
            <Link
              className="mt-4"
              href="https://www.wix.com/blog/website-layouts"
            >
              Learn more about website layouts
            </Link>
          </Accordion.Body>
        </Accordion>
      </Accordion.Body>
    </Accordion>
    <Accordion autoClose>
      <Accordion.Title>List component</Accordion.Title>
      <Accordion.Body>
        <List variant="unordered">
          <List.Item>
            This is how a list component looks like in 'unordered' variant
          </List.Item>
          <List.Item>
            <strong>Strong text here</strong> and normal text here is allowed
          </List.Item>
          <List.Item>
            Actually, anything is allowed in here, even{" "}
            <Link href="/this" variant="inline">
              links (though, with 'inline' variant)
            </Link>
            .
          </List.Item>
        </List>
        <List>
          <List.Item>And this is our 'ordered' list component</List.Item>
          <List.Item>List item 2</List.Item>
          <List.Item>List item 3</List.Item>
        </List>
      </Accordion.Body>
    </Accordion>
    <Accordion autoClose>
      <Accordion.Title>Dropdown component</Accordion.Title>
      <Accordion.Body>
        <Dropdown>
          <Dropdown.Name>This is a toggle</Dropdown.Name>
          <Dropdown.Item>Item 1 and it is loooooooong</Dropdown.Item>
          <Dropdown.Item>Item 2 is short</Dropdown.Item>
          <Dropdown.Item>Item 3 is much much much longer than others</Dropdown.Item>
        </Dropdown>
      </Accordion.Body>
    </Accordion>
  </div>
);

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
