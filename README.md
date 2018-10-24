# Debeloper Docs feedback widget

This project contains the code for the developer docs feedback widget.

## Demo

A live demo is available [here on GitHub](https://box-devrel.github.io/documentation-feedback-widget/). 

## Usage

To use the library apply the following 3 steps to your HTML.

```html
<!-- 1. Load the latest build and fonts into the HEAD of your HTML -->
<head>
  <script src="https://box-devrel.github.io/documentation-feedback-widget/documentation-feedback.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
</head>

<!-- 2. Create an HTML element with a class name or ID  -->
<div id='target' />

<!-- 3. At the bottom of your HTML initialize the demo -->
<script type="text/javascript">
  exploration.setup({
    // This element name is used in a JS querySelector
    element: '#target',
    // This base URL should point to your serverless function to handle
    // the data 
    endpoint: 'https://hubzs7tts2.execute-api.us-east-1.amazonaws.com/prod'
  });
</script>
```

This will initialize the demo and bind it to the selected element.

## Development

To start the dev server run the `yarn start` command.

This will open a new browser and run linting, and compile the widget ready
for the browser.

## Distribution

Currently distribution has not been set up yet. To make a build,
run the `yarn build` command.
