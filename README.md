
# react-modal-mc - version 1.3.6

This is a modal component for React. Developped for a student project and used in [P14-hrnet]

## Author 

-Matthieu CARON

### Prerequisites

- [Node.js (Version 18.12.1)](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- *(Recommended IDE)* [VSCode](https://code.visualstudio.com/)
- [react](https://react.dev/)
- [react-dom](https://react.dev/reference/react-dom)

## My Table of Content

- [Installation](#installation)
- [Usage](#usage)
- [Props](#Props)

## Installation

You can install the `react-modal-mc ` package using npm:

```bash
npm i react-modal-mc
```
## Usage

Import `ReactModal` in your React component:

```jsx
import ReactModal from "react-modal-mc";
```	

Implement `ReactModal` in your React component:

```jsx
const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      <ReactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Modal Title"
        message="This is a customizable message."
        modalBackground="#fff"
        closeButtonBackground="#000"
        closeButtonHoverBackground="#ff0000"
      >
      </ReactModal>
    </div>
  );
};

export default App;
```

You can also display Modal without an Opening button, this an exemple with a confirmed Form : 

```jsx
const FormWithModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" required />
        <button type="submit">Submit</button>
      </form>
      <ReactModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Form Submitted"
        message="Thank you for your submission."
        modalBackground="#fff"
        closeButtonBackground="#000"
        closeButtonHoverBackground="#ff0000"
      >
        <p>Your form has been successfully submitted.</p>
      </ReactModal>
    </div>
  );
};

export default FormWithModal;
```

## Props

The `ReactModal` component props you need:

| Prop | Type | Description | Default Value |
| ---- | ---- | ----------- |  ------------- |
| isOpen | boolean	|Determines if the modal is open or closed	|false | 
| onClose| function	|Function to call when the modal is closed	|undefined | 
|title| 	string|	Title of the modal|	'' | 
| message | string	|Message to display in the modal	|'' |
| children | node	|Custom content to display in the modal	|null |
| modalBackground | string|	Background color of the modal|	#fff|
| closeButtonBackground | string	|Background color of the close button	|#000 |
| closeButtonHoverBackground | string |Background color of the close button on hover |#ff0000 | 
