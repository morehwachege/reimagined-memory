
# HordesIO & NightowlIO

JWT token joined applications sharing authentication API buit with Nest Js 
Both frontends are built with ReactJs.




## Demo

Click to play the demo video

[![Watch the video](https://media.licdn.com/dms/image/D4D03AQGLkgevEUk8Bw/profile-displayphoto-shrink_400_400/0/1693047131287?e=1701907200&v=beta&t=P6_XGC2afxauLvsgBHRTAw9i0wW1kcztXYd7MCq-TsU)](./repo-assets/React%20App.webm)


## Requirements
These need to be preinstalled

`node`, `npm`, `mongodb`

## Installation
Install foreman to run all the projects in one go.

``` bash
 npm i -g foreman

```

Install dependencies

```bash
 npm i --prefix hordes && npm i --prefix nightowl && npm i --prefix hordesnight-api
```
## Configure the database
In `/hordesnight-api` directory replace the `MONGO_URI` value with your MongoDB database string in the format shown

```python
    MONGO_URI ="mongodb://username:password@server:27017/database"
```

Start the project

```bash
nf start
```

The Hordes and Nightowl projects should both be running  at port 5000 and 5001 consecutively while the API should be running at port 3000

Though should not be done in production, I've left the ``.env`` inside the api dir that have the links with the db sting example for running convenience.

Running each of the projects individually will cause a crash since the ports used at this dev instance are from foreman.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
