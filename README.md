# Exchange Rates

This simple web application displays the latest and historical exchange rates using the Currency Data API from APILayer.

## Working Demo
See [Working Demo](http://vuejs-vite-s3-bucket.s3-website-ap-southeast-1.amazonaws.com/)

## Quickstart

### Deploy using Docker

1. Make sure you have Docker installed.

2. Clone this repos to your local machine

```bash
git clone https://github.com/vandanapareek/currency-data.git
```

3. Build the image, you can pass the API key as a build argument:

```bash
docker build --build-arg API_KEY=your_api_key -t your_image_name .
```

4. Start a container, you can set the environment variable using the -e flag:

```bash
# Open your browser at http://localhost:8080 to access the app
docker run -e VUE_APP_API_KEY=your_api_key -p 8080:8080 your_image_name
```
5. [DEMO Screenshot](Screenshot.png)

### Deploy manually

1. Create a .env file in the root of your project with following content
```
VUE_APP_API_KEY=your_api_key
```

2. Project setup
```
npm install
```

3. Compiles and hot-reloads for development
```
npm run serve
```
4. [DEMO Screenshot](Screenshot.png)