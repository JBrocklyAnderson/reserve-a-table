# The Little Lemon's Mobile Table Reservation System

## Introduction
The Little Lemon is a popular (fictitious) Italian restaurant that this application was made to benefit. The restaurant's owners reached out to me through Meta's Front-End Developer specialization in pursuit of an application that would let their guests make table reservations any time, any where. To tailor my solution to the specific needs of their patronage, I gathered everything I'd need to know about the restaurant, their customers, and the application itself.

## Business Objectives
- Engage in user research to craft an exemplary user persona that encapsulates an average patron with the restaurant
- Use this persona to create a journey map of their experience through the app's new table reservation feature to anticipate customer needs and satisfy their expectations
- Create an engaging, easy-to-use reservation form that gives customers the ultimate freedom to customize their reservation
- Logically validate user input in accordance to best practices in security and user experience
- Write stringent tests to ensure that user input has been received and that it has been properly validated and sanitized if necessary

### Development
#### Technology Used
The basic foundation of this application has been set up with the `create-react-app` command and all the associated packages therein, leveraging the React JavaScript framework for its robust component-bsed modularity and efficient state management. Additional libraries and tools include:
- React Router for the efficient implementation of a navigable routing layer
- Jest and React Testing Library to write effective unit and integration tests
- CSS modules were used to prevent naming conflicts and enable a consistent naming convention

#### Style Guide
- The codebase has been formatted according to a consistent style guide for readability, maintainability, and collaborative efficacy, though their are many small details that would quickly become cumbersome if laid out in bullet points here. The main ones to look for are the consistent ordering of import statement, the use of ES6 arrow functions, the wrapping of string data with single quotations, the implementation of ternary operators to consolidate code blocks, and the unfolding of JSX attributes across multiples lines to enhance readability and maintainability.

#### Testing and QA
The main concern regarding testing was to verify the correct navigability through the application's links, to devise units tests for the mounting of various key components, and to write an integration test ensuring the proper validation of the components that share data with the table reservation form.

### Production
#### Deployment
The project is hosted on Vercel. You can see it live by [clicking here]().

## Acknowledgments
I thank the Meta team for their delivery of brand logos and well-rounded web-development course materials, as well as the documentation for libraries, tools, and hosting services used to bring the project into reality.
