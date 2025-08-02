# ViewCrypto

A modern cryptocurrency tracking application built with React, TypeScript, and Mantine UI.

## Features

- Real-time cryptocurrency price tracking
- Detailed information about each cryptocurrency
- Price history charts
- Theme customization with multiple color options
- Responsive design for all device sizes

## Technologies

- React 18
- TypeScript
- Mantine UI
- SWR for data fetching
- React Router for navigation
- Zustand for state management
- Tailwind CSS for styling
- Vite for fast development

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/mikamika06/viewcrypto.git
    cd viewcrypto
    ```

2. Install dependencies
    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    ```

3. Create a `.env` file in the root directory with:
    ```
    VITE_MAX_COINGECKO_REQUESTS=10
    VITE_COINGECKO_BASE_URL='https://api.coingecko.com/api/v3'
    ```

4. Start the development server
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

## Project Structure

```
/src/assets    - Static assets (images, fonts, styles)
/src/components - Reusable UI components
/src/features   - Feature-specific components
/src/hooks      - Custom React hooks
/src/lib        - Library code and providers
/src/pages      - Page components
/src/services   - API services
/src/stores     - Zustand stores
/src/utils      - Utilities and helper functions
```

## Author

mikamika06

## License

MIT © mikamika06