# AIDEN - Artificial Intelligence and Digital Entity Network

AIDEN is a robust voice processing service that leverages cutting-edge machine learning models to translate speech to text and vice versa. This service uses a user-friendly frontend interface to capture voice inputs, which are then processed by the AIDEN backend. The backend employs OpenAI's Whisper for precise speech-to-text conversion and Mixtral8x7b, a mixture of experts language model developed by Mistral AI, for advanced text processing. Finally, the processed text is transformed back into speech with Amazon Polly's lifelike text-to-speech service.

## Architecture Diagram
![Architecture Diagram](https://github.com/sudhz/aiden/assets/61375120/76e298c6-58cd-4856-b697-57a66a01a082)


## Prerequisites

Before you install and run the AIDEN service, make sure you have Node.js and npm installed. Node.js is the runtime environment required to run the application, and npm is the package manager used to install the necessary dependencies.

## Installation

Follow these steps to set up the AIDEN service on your local machine:

1. **Clone the repository**

```bash
git clone https://github.com/sudhz/aiden.git
cd aiden
```

2. **Set up the .env file**

Create a `.env` file in the `backend` directory of the project with the following structure:

```plaintext
DEEPINFRA_KEY=<your_deepinfra_key>
AWS_ACCESS_KEY=<your_aws_access_key>
AWS_SECRET_KEY=<your_aws_secret_key>
```

Make sure to replace the placeholders with your actual keys.

3. **Install dependencies**

Run the following commands in the `frontend` directory to install all the necessary dependencies and start the frontend service:

```bash
npm install
npm start
```

4. **Start the backend server**

To start the backend server, run the following commands in the `backend` directory:

```bash
npm install
npm run dev
```

## How to Use

After starting the backend server, navigate to the frontend interface. Use the record button to capture your voice input. Once the recording is stopped, the voice file is sent to the backend, processed through OpenAI's Whisper, further processed by Mixtral8x7b, and returned as speech using Amazon Polly.

## Mixtral8x7b by Mistral AI

Mixtral8x7b is a state-of-the-art language model developed by Mistral AI. It employs a mixture of experts approach to deliver high-quality text processing, ensuring that the AIDEN service can handle complex language tasks efficiently and accurately.

## Contributing

We welcome contributions of all kinds from the open-source community.

## License

This project is released under the MIT License.

## Acknowledgments

* OpenAI for Whisper, enabling accurate speech-to-text conversion.
* Mistral AI for the Mixtral8x7b model, providing sophisticated text processing.
* Amazon Polly for high-quality text-to-speech synthesis.

