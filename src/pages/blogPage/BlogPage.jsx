import React from 'react';
import { Container } from 'react-bootstrap';

const BlogPage = () => {
    return (
        <Container className='my-5'>
            <h1 className='text-center text-decoration-underline mb-5'>Questions!!</h1>
            <div>
                
                <h3>1. Tell us the differences between uncontrolled and controlled components ?</h3><br />
                <p>In software engineering, the terms "uncontrolled components" and "controlled components" are used to describe different types of software elements or parts that make up an application.

                    Uncontrolled components are those that operate independently of the application's central state management system. They are typically used for simple, one-off interactions and are not managed or monitored by the application's core architecture. Examples of uncontrolled components include HTML input fields, buttons, and checkboxes.

                    Controlled components, on the other hand, are managed by the application's central state management system. They typically receive their values from the application's state, and changes to the component trigger updates to the application's state. This enables more granular control over the user interface and can help ensure consistency across the application. Examples of controlled components include form elements that update the application's state in response to user input.

                    The key differences between uncontrolled and controlled components are their level of integration with the application's core architecture and their management of state. Uncontrolled components operate independently of the application's state management system, while controlled components are tightly integrated with it. As a result, controlled components are often preferred in larger applications where consistency and predictability are important, while uncontrolled components may be more suitable for simpler, standalone interactions.</p><br />
                <h3>2. How to validate React props using PropTypes ?</h3>
                <p>PropTypes is a library in React that provides a convenient way to validate the types of props passed to a component. It allows you to define the expected types of the props, and will throw an error if the actual type of the prop doesn't match the expected type.</p><br />
                <h3>3. Tell us the difference between nodejs and express js.</h3><br />
                <p>Node.js and Express.js are both important technologies used in web development, but they have different purposes.

                    Node.js is a server-side runtime environment that allows developers to use JavaScript to build server-side applications. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js can be used to build a wide range of server-side applications, including web applications, real-time applications, and API services.

                    Express.js, on the other hand, is a web framework for Node.js that provides a set of features and tools for building web applications and APIs. It is built on top of Node.js and provides a more structured way to build web applications. Express.js simplifies the process of building web applications by providing middleware for handling requests, routing, and view rendering.</p>
                <h3>4. What is a custom hook, and why will you create a custom hook?</h3>
                <p>A custom hook is a JavaScript function that uses built-in React hooks and other JavaScript functions to create a reusable piece of logic that can be shared across multiple components in a React application.

                    Custom hooks enable developers to abstract away complex logic and functionality from components, making them easier to read, maintain, and test. Custom hooks can be used to encapsulate common functionality such as fetching data from an API, handling user input, managing state, and more.

                    Developers create custom hooks to reduce code duplication, improve code organization, and simplify complex logic. By creating a custom hook, developers can reuse code across multiple components, making their code more modular and easier to maintain.

                </p>
            </div>

        </Container>
    );
};

export default BlogPage;