import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import app from "../index.js";
import request from "supertest";
dotenv.config();



beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

describe('GET /api/notes', () => {
    it('responds with JSON', (done) => {
        request(app)
            .get('/api/notes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });


});



/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});