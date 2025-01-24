# Express.js Middleware Example
![Description of Image](https://d3kjluh73b9h9o.cloudfront.net/optimized/3X/0/b/0ba1aba79bc22192ad7be09c9a6a7dc189774006_2_690x384.gif)

This repository showcases an example of **application-level middleware** in Express.js. The middleware validates query parameters (`name` and `salary`) to ensure proper checks before routing users to specific pages.

---

## Features

- **Middleware Validation**: Ensures query parameters (`name` and `salary`) are correctly provided.
- **Custom HTML Responses**: Styled responses using inline CSS for better user experience.
- **Beginner-Friendly**: A clean and simple implementation for developers starting with Express.js.

---

## How It Works

1. **Validation Logic**:
   - Checks if the `name` parameter is provided and matches a specific value (`Mahad`).
   - Validates the `salary` parameter to ensure it is provided and meets a minimum threshold.

2. **Custom Responses**:
   - Returns styled HTML responses for missing or invalid parameters.
   - Seamless navigation to routes when validations pass.

3. **Routes**:
   - `/`: Displays the home page message.
   - `/about`: Displays the about page message.

--- 

![GIF](https://movicoders.com/movicoders-media/movicoders-data-processing-integration.gif)
