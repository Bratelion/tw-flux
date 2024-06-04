# TW-FLUX

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Development](#Development)
- [Contributing](#Contributing)
- [License](#License)
## Overview
TW-FLUX is a collection of your favorite Tailwind CSS components. It allows for easy integration of these components into any React project, enhancing development speed and ensuring a consistent design.

## Features
- Reusable Components: Pre-built, customizable components.
- Tailwind CSS: Fully styled using Tailwind CSS.
- TypeScript: Built with TypeScript for type safety.
- Easy Preview: Includes a development environment for easy preview of components.

## Installation
Install the package using npm or yarn:

```bash
npm install tw-flux
```

or

```bash
yarn add tw-flux
```
## Usage
Import and use the components in your React project:


```jsx
import React from 'react';
import { Test } from 'tw-flux';

const App = () => (
  <div className="p-4">
    <Test>Hello, TypeScript with Tailwind!</Test>
  </div>
);

export default App;
```

## Development
Prerequisites
- Node.js
- Yarn
### Setup
Clone the repository:
```bash
git clone https://github.com/your-username/tw-flux.git
cd tw-flux
```

### Install dependencies:
```bash
yarn install
```

### Preview Components
To start the development server and preview the components:

```bash
yarn start
```
This will start a Parcel development server and open the preview application.

### Build Library
To build the library:

```bash
yarn build:lib
```
This will compile the TypeScript files and output them to the dist directory.

### Testing the Package
Before publishing, you can pack the library and test it in another project:

```bash
yarn new:pack
```
This command generates a tarball that can be installed in another project to test.

Test using:
```bash
yarn link "tw-flux"
```

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch.
4. Create a pull request to the main branch of the original repository.

Please ensure your code follows the project's coding standards and passes all tests.

## License
This project is licensed under the [MIT License](/LICENSE.txt).