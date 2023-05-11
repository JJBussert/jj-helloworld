# JJ HelloWorld CLI

A simple CLI tool that prints 'Hello World!' by default or 'Hello XYZ!' if provided with an argument.  This is primarily a sample/demo to use to model future cli commands that I will be writing against. 

## Installation

To install the package globally, run:

```bash
npm install -g jj-helloworld
```

## Usage
After installation, you can run the command jj-helloworld in your terminal:
```bash
jj-helloworld
```

By default, this will output:

```bash
Hello World!
```

You can also provide an argument using --world or -w to override the default value:

```bash
jj-helloworld --world ABC
```

This will output: 
```bash
Hello ABC!
```

## Development

To develop and test the package locally, you can clone the repository and install the dependencies:

```
git clone https://github.com/JJBussert/jj-helloworld.git
cd jj-helloworld
npm install
```

## Scripts

The following scripts are available for development and testing:

- npm test: Runs the test-cli and test-cli-override scripts.
- npm run test-cli: Tests the default behavior of the CLI (Hello World!).
- npm run test-cli-override: Tests the CLI with the --world argument (Hello ABC!).

## License

This project is licensed under the MIT License.