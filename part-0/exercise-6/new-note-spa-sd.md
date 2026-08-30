---
config:
  theme: redux
---
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa   
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON data containing notes
    deactivate server

    browser-->server:
    Note right of browser: User submits form
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa   
    activate server
    Note left of server: The server creates new note using passed form data
    server-->>browser: 201 Created 
    Note right of browser: New message is appended to list via JavaScript and form clears
    deactivate server


