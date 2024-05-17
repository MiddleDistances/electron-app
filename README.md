
# Electron App

This is a test Electron application for Cycliq. The UI was rapidly generated from a screenshot made by https://v0.dev/

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Author](#author)

## Requirements

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (which includes npm)

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/MiddleDistances/electron-app.git 
   ```

2. **Navigate to the project directory**:

   ```sh
   cd electron-app
   ```

3. **Install the dependencies**:

   ```sh
   npm install
   ```

## Usage

To start the Electron application, run the following command:

```sh
npx electron .
```

This will ensure that Electron is installed if it's not already, and then it will start the Electron app.

## Building

To build the Electron application for macOS, run the following command:

```sh
npm run build
```

This will create a packaged version of the app in the `dist` directory.

## Troubleshooting

### Common Issues

- **Electron not found**: If you encounter an error stating that Electron is not found, you can try installing Electron globally or using `npx` to run Electron.

  ```sh
  npx electron .
  ```

- **Dependencies Issues**: If you encounter issues with dependencies or vulnerabilities, you can try running:

  ```sh
  npm audit fix
  ```

  For more severe issues, you may need to manually review and update dependencies.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Created by theKing.
