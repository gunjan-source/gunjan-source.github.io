# Personal Website

This is a personal website project to showcase my work as a developer. The website includes various sections such as Home, About, Projects, and Contact, each designed to provide visitors with insights into my skills, background, and projects.

## Project Structure

The project is organized as follows:

```
personal-website
├── src
│   ├── main.tsx          # Entry point of the application
│   ├── pages             # Contains the main pages of the website
│   │   ├── Home.tsx      # Homepage content
│   │   ├── About.tsx     # Information about the developer
│   │   ├── Projects.tsx   # List of projects
│   │   └── Contact.tsx    # Contact form
│   ├── components        # Reusable components
│   │   ├── Header.tsx    # Website header
│   │   ├── Footer.tsx    # Website footer
│   │   ├── ProjectCard.tsx # Individual project details
│   │   └── Layout.tsx    # Layout wrapper for pages
│   ├── styles            # CSS styles
│   │   ├── globals.css    # Global styles
│   │   └── components.css  # Component-specific styles
│   ├── lib               # Library functions
│   │   └── api.ts        # API functions for data fetching
│   └── types             # TypeScript types
│       └── index.ts      # Type definitions
├── public                # Public assets
│   ├── robots.txt       # Instructions for web crawlers
│   └── site.webmanifest  # Web application metadata
├── data                 # Data files
│   └── projects.json     # Project details in JSON format
├── index.html           # Main HTML template
├── package.json         # npm configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to view the website.

## Features

- Responsive design
- Easy navigation between sections
- Dynamic project listing
- Contact form for inquiries

## License

This project is licensed under the MIT License.