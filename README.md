
# NodeJS BACKEND



## Demo 


https://github.com/HardcoreSoftware12/Rolixer/assets/130271091/7fea673b-ab22-42b9-9d6f-2649b7a6b804


## prerequisites

#### 1.Install nodejs and postgresql 
#### 2.create database product
#### 3.create table productLists



## Installation

Clone git repository

```bash
  npm install 
  npm start
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USERNAME`

`DB_PASSWORD`

`PORT`


## API End-Points


#### Dummy API

```http
  https://s3.amazonaws.com/roxiler.com/product_transaction.json
```

#### Get all transactions [All end-points require month]

```http
  GET /api/getAllTransactions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `month` | `string` | **Required**. month of transactions |
| `search` | `string` |  keywords to search |

#### Other Routes 

```http
  GET /api/stats
```
```http
  GET /api/barchart
```
```http
  GET /api/piechart
```
```http
  GET /api/combinedApi
```



