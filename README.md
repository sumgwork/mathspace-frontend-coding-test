# Mathspace Frontend Test Solution

Submitted by: **Sumit Govil**

This project presents an interactive histogram designed for Mathspace. It features a configurable maximum Y-axis value, and allows real-time adjustments of bar values via drag interactions.

## Demo

[https://mathspace-sumit.netlify.app/](https://mathspace-sumit.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/82ecaf2e-4577-4471-85a1-598222657ca4/deploy-status)](https://app.netlify.com/sites/mathspace-sumit/deploys)

## Choice of Stack

- **ReactJS**: Selected as the primary framework for its robust ecosystem and component-driven architecture.
- **TypeScript**: Chosen for providing type safety and ease in tooling.
- **Vite**: Utilized for efficient and fast build tooling.
- **Tailwind CSS**: Chosen for its utility-first approach, and for rapid and maintainable styling.

### Concepts

- **Context API**: To globally manage and distribute the histogram's maximum size and the individual values of each bar. Also manages read only mode for the histogram.
- **Custom Hooks**: To access and manipulate context values and eliminating redundant imports.

## Installation

Install the necessary dependencies with the following command:

```bash
yarn
```

## Running the Application

Start the development server by running:

```bash
yarn dev
```

The application is optimized for Google Chrome.

## Areas for Improvement

- **Performance:** Changes in any bar value trigger re-renders for all bars due to their storage within the same context.
- **Responsiveness**: The current design is optimized only for desktop environments and needs adaptation for mobile devices.

## Future Enhancements

- Test Coverage
- Accessibility

## Known Issues

- Rendering a horizontal line over the bars when being dragged hasn't been implemented yet. It could be done by capturing the drag event for the bars inside the histogram component and then using the value to paint a horizontal line.
- The drag sensitivity for adjusting bar values is inconsistent, requiring varied dragging efforts for similar value changes.
