
# HordesIO & NightowlIO

JWT token joined applications sharing authentication API buit with Nest Js 
Both frontends are built with ReactJs.




## Demo



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

Though should not be done in production, I've left the ``.env`` inside the projects that have the links with the ports for running convenience.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
