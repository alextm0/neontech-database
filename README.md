
# Neon Database Integration Demo

A simple demo project showcasing how to integrate the [Neon Tech Database](https://neon.tech) with a form for submitting course names. This project includes form validation using [Zod](https://zod.dev) and a POST endpoint to store course titles in the database.

## Features

- **Neon Database Integration**: Connects to a Neon database for storing course titles.
- **Form Validation**: Uses Zod for validating form input.
- **POST Endpoint**: Handles form submissions and stores data in the database.

## Tech Stack

- **Frontend**: Next.js, React
- **Validation**: Zod
- **Database**: Neon Tech
- **API**: Next.js API Routes

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Neon database account and connection string

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/neon-database-demo.git
   cd neon-database-demo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a \`.env.local\` file in the root directory and add your Neon database connection string:

   ```bash
   DATABASE_URL=your-neon-database-connection-string
   ```

### Running the Project

To start the development server, run:

```bash
npm run dev
```

The project should now be running on \`http://localhost:3000\`.

### API Routes

- **POST /api/courses**: Accepts a JSON body containing the course title and stores it in the Neon database.

### Example Request

```json
POST /api/courses
{
  "title": "Introduction to Algorithms"
}
```

### Zod Validation

This project uses Zod for form validation to ensure that:

- The course title is a non-empty string.

## Contributing

Feel free to submit issues and pull requests if you have any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Neon Tech](https://neon.tech) for providing a powerful and easy-to-use database solution.
- [Zod](https://zod.dev) for making form validation easy.
