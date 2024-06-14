import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { Accordion, Blur, Dropdown, Folder, Link, List } from "..";

const App: React.FC = () => (
  <Blur
    className="flex flex-col p-4 text-white bg-black min-h-full md:min-h-screen"
    blobs={15}
    blobColors={["yellow", "orange", "red", "green", "blue", "violet"]}
  >
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
          <Dropdown.Item>
            Item 3 is much much much longer than others
          </Dropdown.Item>
        </Dropdown>
      </Accordion.Body>
    </Accordion>
    <div className="p-4">
      <span className="text-lg">Folder component</span>
      <div className="flex flex-row gap-10 p-10">
        <Folder folderColor="#D9A78C" folderName="The Mysterious Forest">
          <h1 className="font-bold mb-4">The Mysterious Forest</h1>
          <p className="mb-6">
            Once upon a time, in a small village nestled at the edge of a dense
            forest, there lived a curious young girl named Elara. She had always
            been fascinated by the stories of the forest, tales of magical
            creatures and hidden treasures that the elders told.
          </p>

          <h2 className="font-semibold mb-4">A Forbidden Journey</h2>
          <p className=" mb-4">
            Despite the warnings of her parents and the villagers, Elara decided
            to venture into the forest to uncover its secrets. She packed a
            small bag with essentials and set off at dawn, the first light of
            the day casting long shadows on the forest path.
          </p>
          <p className="mb-4">
            As she walked deeper into the forest, the trees grew taller and the
            light dimmer. The air was filled with the sounds of rustling leaves
            and distant animal calls. Elara felt a mix of excitement and fear,
            but she was determined to see this adventure through.
          </p>

          <h3 className="font-semibold mb-4">
            Meeting the Forest Guardian
          </h3>
          <p className="text-base mb-4">
            After hours of walking, Elara came across a clearing where a
            magnificent tree stood, larger and older than any she had ever seen.
            At its base sat an old man with a long white beard and piercing blue
            eyes. He introduced himself as the Guardian of the Forest.
          </p>
          <p className="text-base mb-4">
            The Guardian told Elara that the forest was indeed magical, but also
            dangerous. He warned her of the dark forces that lurked within, but
            seeing her determination, he decided to help her on her quest. He
            gave her a small, glowing amulet and instructed her to use it in
            times of great peril.
          </p>

          <h4 className="font-semibold mb-4">The Hidden Treasure</h4>
          <p className="text-base mb-4">
            With the Guardian's guidance, Elara continued her journey. She
            encountered many strange and wonderful creatures, from talking
            animals to mischievous sprites. Each encounter taught her something
            new and brought her closer to the heart of the forest.
          </p>
          <p className="text-base mb-4">
            Finally, after what felt like days of travel, Elara found herself at
            the entrance of a hidden cave. Inside, she discovered a treasure
            trove of ancient artifacts and precious gems. Among them was a book
            of spells that held the key to the forest's magic.
          </p>

          <h5 className="font-semibold mb-4">Returning Home</h5>
          <p className="text-base mb-4">
            Elara returned to the village with the book of spells and the
            knowledge she had gained. The villagers were amazed by her bravery
            and her discoveries. With the Guardian's amulet and the spells from
            the book, Elara was able to protect the village and share the magic
            of the forest with her people.
          </p>
          <p className="text-base mb-4">
            From that day on, Elara was known as the Heroine of the Forest, and
            her story was told for generations. The village thrived, and the
            once-mysterious forest became a place of wonder and adventure for
            all who dared to explore it.
          </p>
        </Folder>
      </div>
    </div>
    
  </Blur>
);

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
