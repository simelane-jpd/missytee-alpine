const supertest = require('supertest');
const PgPromise = require("pg-promise")
const express = require('express');
const assert = require('assert');
const fs = require('fs');
require('dotenv').config()


const API = require('../api');
const { default: axios } = require('axios');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const DATABASE_URL = process.env.DATABASE_URL;
const pgp = PgPromise({});
const db = pgp(DATABASE_URL);


API(app, db);