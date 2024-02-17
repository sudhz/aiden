# Aiden Voice Processing Service

Aiden is a robust voice processing service that leverages cutting-edge machine learning models to translate speech to text and vice versa. This service uses a user-friendly frontend interface to capture voice inputs, which are then processed by the Aiden backend. The backend employs OpenAI's Whisper for precise speech-to-text conversion and Mixtral8x7b, a mixture of experts language model developed by Mistral AI, for advanced text processing. Finally, the processed text is transformed back into speech with Amazon Polly's lifelike text-to-speech service.

## Architecture Diagram
[Architecture Diagram](https://i.imgur.com/pdj0qI7.png)

## Prerequisites

Before you install and run the Aiden service, make sure you have Node.js and npm installed. Node.js is the runtime environment required to run the application, and npm is the package manager used to install the necessary dependencies.

## Installation

Follow these steps to set up the Aiden service on your local machine:

1. **Clone the repository**

```bash
git clone https://github.com/sudhz/aiden.git
cd aiden
```

2. **Set up the .env file**

Create a `.env` file in the root directory of the project with the following structure:

```plaintext
DEEPINFRA_KEY=<your_deepinfra_key>
AWS_ACCESS_KEY=<your_aws_access_key>
AWS_SECRET_KEY=<your_aws_secret_key>
```

Make sure to replace the placeholders with your actual keys.

3. **Install dependencies**

Run the following command to install all the necessary dependencies:

```bash
npm install
```

4. **Start the backend server**

To start the server, run:

```bash
npm run dev
```

## How to Use

After starting the backend server, navigate to the frontend interface. Use the record button to capture your voice input. Once the recording is stopped, the voice file is sent to the backend, processed through OpenAI's Whisper, further processed by Mixtral8x7b, and returned as speech using Amazon Polly.

## Mixtral8x7b by Mistral AI

Mixtral8x7b is a state-of-the-art language model developed by Mistral AI. It employs a mixture of experts approach to deliver high-quality text processing, ensuring that the Aiden service can handle complex language tasks efficiently and accurately.

## Contributing

We welcome contributions of all kinds from the open-source community. Please read through our CONTRIBUTING.md file for guidelines on how to make a contribution.

## License

This project is released under the MIT License - see the LICENSE file for details.

## Acknowledgments

* OpenAI for Whisper, enabling accurate speech-to-text conversion.
* Mistral AI for the Mixtral8x7b model, providing sophisticated text processing.
* Amazon Polly for high-quality text-to-speech synthesis.
* All the contributors who have helped shape Aiden into what it is today.

