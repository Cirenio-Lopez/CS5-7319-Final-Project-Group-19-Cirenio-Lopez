# Web Crawler Project

## 1. Compilation & Implementation Platform

### Download & Installation

Node.js can be downloaded from the official [Node.js website](https://nodejs.org/).

After downloading the installer, run it and follow the on-screen instructions to install Node.js and npm (Node Package Manager).

### Configuration

No additional configuration should be necessary after installing Node.js. To verify the installation, run the following commands in your terminal:

```bash
node --version
npm --version
```

## 2. How to Compile the Code

This project is written in JavaScript and does not require compilation. JavaScript is an interpreted language that is executed by the Node.js runtime. You will need to install all dependencies used for this project. To do so, run the following commands in your terminal:

```
npm i
```

## 3. How to Execute the System

To execute the web crawler, navigate to the project directory in your terminal and run:

```bash
node app.js -d https://smu.edu
```

Replace `https://smu.edu` with the domain you wish to crawl.

## 4. Architecture Design Differences

### Pipe and Filter Architecture

- Designed around the concept of a linear data processing pipeline.
- Each component (filter) is independent and processes data sequentially.
- Easy to understand and maintain due to its straightforward flow.

### Layered Architecture

- Organized into hierarchical layers.
- Each layer has a specific role and only interacts with the layer directly above or below it.
- Provides a clear separation of concerns, which can be beneficial for complex systems.

### Rationale for Final Selection

The Pipe and Filter architecture was chosen for its simplicity and the nature of the web crawling task, which involves processing a stream of data (web pages and links).

## 5. Changes from Project Proposal

Originally, this project was written in a completely different programming language, but due to the utilization of node.js in other classes and projects, it was best suited for this project. Not to mention JavaScript is a web focused language, so a lot of the programming could be abstracted with the language's tools.

## 6. Additional Information

### Architecture Design Rationales

- **Modularity:** Each component in the Pipe and Filter architecture can be updated independently without affecting the rest of the system.
- **Reusability:** Filters can be reused in different parts of the system or in different projects.
- **Scalability:** The system can be scaled by adding more instances of filters or by enhancing individual filters to process data in parallel.
