# Simple Image Comparison Component

A lightweight, easy-to-integrate component for creating elegant before-and-after image comparisons. Designed with simplicity and ease of use in mind, this component is perfect for showcasing transformations, product comparisons, and more in a visually compelling way.

You can [preview the component](https://image-comparison-component.vercel.app) here.

## Features

- **Easy Integration**: Minimal setup required, making it straightforward to add to your existing website or project.
- **Responsive Design**: Ensures a great viewing experience across all device sizes.
- **Customizable**: Utilizes CSS variables, making it simple to customize the theme, including colors and sizes, directly within the CSS file.
- **Simple Integration**: With minimal setup required, it can be easily added to your website without needing to overhaul your existing design.
- **Optimized Performance**: The lightweight nature of the component means it doesn't impact your website's load time, maintaining optimal performance.
- **Cross-Browser Compatibility**: Works seamlessly across modern web browsers, ensuring broad accessibility.

## Installation

To use the Image Comparison Component in your project, follow these steps:

1. Clone this repository or download the ZIP file.
2. Extract the contents and integrate the `css`, `js`, and `index.html` files into your project structure.

Ensure you link to the `style.css` and `script.js` in your HTML file:

```html
<!-- In your HTML head -->
<link rel="stylesheet" href="https://image-comparison-component.vercel.app/css/style.css">

<!-- Before the closing body tag -->
<script src="https://image-comparison-component.vercel.app/js/script.js"></script>
```

3. Use the provided HTML structure for the component in your HTML file:

```html
<div class="image-comparison">
  <div class="image-container">
    <img src="https://placehold.co/600x200/blue/white" alt="Before" class="before">
    <img src="https://placehold.co/600x200/red/white" alt="After" class="after">
    <div class="slider-line"></div>
  </div>
  <input type="range" min="0" max="100" value="50" class="slider">
</div>
```

Adjust the `src` attributes of the `<img>` tags to point to your before and after images.

## Usage

Include the component's HTML structure in your page and ensure the CSS and JavaScript files are correctly linked. Customize the component by editing the `style.css` file to match your website's design.

## Contributing

We welcome contributions to improve this component! If you have suggestions or improvements, feel free to fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).
