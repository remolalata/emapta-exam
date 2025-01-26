# Full Stack Application

This is a simple full-stack application with a Node.js server and a React client. The server-side code is located in the `server` folder, while the client-side code is in the `client` folder.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install all dependencies for both server and client:
   ```bash
   npm run install:all
   ```

### Running the Application

After the installation is complete, run the following command to start both the server and client:

```bash
npm run dev
```

This will concurrently run the server and the client in development mode.

### Folder Structure

- `server/`: Contains the Node.js server code.
- `client/`: Contains the React client code.

### Scripts

- **`install:all`**: Installs all dependencies for both the server and client.
- **`dev`**: Runs both the server and client concurrently in development mode.