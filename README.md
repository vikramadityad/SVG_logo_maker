# SVG Logo Maker

![GitHub Repo Badge](https://img.shields.io/badge/GitHub-Repo-blue?style=flat-square&logo=github)

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Features](#features)
- [How to Use](#usage)
- [Testing](#testing)
- [screenshot](#screenshot)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The SVG Logo Maker is a Node.js command-line application that allows users to generate custom logos and save them as SVG files. With this application, you can select a color, shape, and text for your logo and save the generated SVG to a file. It's a useful tool for creating simple logos quickly.

## Usage

To use the SVG Logo Maker, follow these steps:

1. Clone the repository to your local machine:

   git clone https://github.com/vikramadityad/SVG_logo_maker.git

2. Install the required dependencies (Inquirer and Jest):
   npm install
3. Run the application by executing the following command:
   node index.js
4. Follow the prompts to provide input for text, text color, shape, and shape color.
   
5. After completing the prompts, an SVG file named logo.svg will be created in the project directory, and you will see the message "Generated logo.svg" in the command line.
   
6. You can open the logo.svg file in a web browser to view your generated logo.

## Features

Create custom logos with text and shapes.
Choose text color and shape color.
Supports three shapes: circle, triangle, and square.
Saves logos as SVG files.
Easy-to-use command-line interface.

## Testing
The application uses Jest for running unit tests. You can run the tests using the following command:
  npx jest 
  
## Screenshot
<img width="1911" alt="Screenshot 2023-10-10 at 6 34 30 PM" src="https://github.com/vikramadityad/SVG_logo_maker/assets/28673859/3b531694-be5a-4641-aed0-212a8ebf9aeb">


## Walkthrough Video
To see a demonstration of the SVG Logo Maker's functionality and how to use it, please watch the walkthrough video. The video demonstrates the application's features and ensures it passes all tests.
  https://drive.google.com/file/d/1ESkNXmNyf14Xw20mCB--bnlzMzamVnn2/view?usp=sharing

## Contributing
If you would like to contribute to this project, please follow these guidelines:

Fork the repository.
Create a new branch for your feature or bug fix: git checkout -b feature-name
Make your changes and commit them: git commit -m "Your commit message here"
Push your changes to your fork: git push origin feature-name
Create a pull request to the main repository.


## License
This project is licensed under the MIT License. See the LICENSE file for details.
