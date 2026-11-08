# peerlink_cp2
rebuild of peerlink

 will update this as i build along, hopefully will be able to document everything

 created frontend and backend folder
 installed npm, vite, eslink
 tried running npm (npm run dev) to try out the webpage,


---------INSIDE App.jsx----------------
function App()
This creates a React component. A component is a reusable part of a user interface.

return (...)
This tells React what to display on the screen.

<h1>, <p> and <button>
These are JSX elements. JSX allows us to describe the UI using HTML-like syntax inside JavaScript.

export default App
This allows another file, such as main.jsx, to import and use the component.


Code	                Purpose
require('express')	    Imports the Express library
express()	            Creates our server application
PORT = 5000	            Defines which port the server uses
app.get()	            Creates an endpoint for HTTP GET requests
req	                    Information about the incoming request
res	                    Used to send a response
res.json()	            Returns JSON data
app.listen()	        Starts listening for requests

An API endpoint is an address that other applications can use to interact with our backend.

------------INSIDE server.js-----------------
conencted to backend on localhost

-----gitignore---------
node_modules/
dist/
.env
.env.*
!.env.example
This prevents dependencies, build output, and environment secrets from being committed.