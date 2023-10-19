# Search for Information about IP

This is a React application that uses the ipInfo.io API to provide information based on the provided IP address. It displays details such as city, region, country, location, internet provider, postcard, and time zone.

You can access the deployed application here: [IP Info React App](https://ip-info-react.netlify.app/)

## Getting Started

To get a local copy of this project and run it on your machine, follow these steps:

### Prerequisites

- Node.js: Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

### Cloning the Repository

1. Open your terminal.

2. Change the current working directory to the location where you want to store the project.

3. Run the following command to clone the repository to your local machine:


```bash
git clone https://github.com/OscarMeneses99/ipInfo-react.git
```

4. Change the current working directory to the cloned repository:


```bash
cd ipInfo-react
```

### Installing Dependencies
To install the project's dependencies, run the following command:

```bash
npm install
```

### Setting Up Environment Variables
The application requires the API endpoint. You need to set the environment variable REACT_APP_TOKEN to the [IpInfo.io](https://ipinfo.io). Create a .env file in the root of your project directory and add the following line:

```plaintext
REACT_APP_TOKEN=YOUR TOKEN
```
### Running the Application
You can start the development server by running the following command:

```bash
npm run dev
```
This will start the development server, and you can access the application in your web browser at http://localhost:3000.

### Acknowledgments
<p>This project was built using Vite.</p>
<p>IP information is provided by ipInfo.io.</p>

