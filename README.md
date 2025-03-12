# 🚀 Getting Started with `the-cocktail`

## 📦 Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [Yarn](https://yarnpkg.com/) (Package manager)

## 🛠️ Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/your-repo/the-cocktail.git
cd the-cocktail
yarn install
```

## 🔄 Running the Project
Start the development server:
```sh
yarn dev
```

Build the project for production:
```sh
yarn build
```

Preview the production build:
```sh
yarn preview
```

🔍 Linting & Formatting
Check for linting errors:
```sh
yarn lint
```

Auto-fix linting and formatting issues:
```sh
yarn format
```

## 📂 Project Structure (Feature-Sliced Design)
The frontend follows the **Feature-Sliced Design (FSD)** methodology, organizing code into meaningful layers.
```
src/
│── app/              # Application-level initialization (providers, configs, entry points)
│── pages/            # Page components (e.g., HomePage, AboutPage)
│── widgets/          # Complex UI blocks (e.g., Sidebar, Navbar)
│── entities/         # Business entities (e.g., User, Product, Cocktail)
│── shared/           # Shared utilities, hooks, and UI components
│── main.tsx          # Root file for mounting React
```

## 📜 Additional Notes
- Uses **Vite** as the build tool.
- **ESLint & Prettier** for code quality.
- **React Router v7** for client-side routing.
- **SWR** for data fetching.
