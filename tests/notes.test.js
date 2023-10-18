import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import app, { server } from "../index.js";
import request from "supertest";
import exp from "constants";
dotenv.config();


let id = undefined

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

/* Closing database connection after all test. */
afterAll(async () => {
    await mongoose.connection.close();
    server.close();
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


describe('POST /api/notes', () => {
    it('should create a note', async () => {
        const res = await request(app).post("/api/notes").send({

            "title": "Team meeting at 10:00 AM",
            "description": "Google meet with Nick Shah"

        });

        id = res.body._id
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe("Team meeting at 10:00 AM")
    })
})

describe("PUT /api/notes/:id", () => {
    it("should update a note", async () => {
        const res = await request(app)
            .put(`/api/notes/${id}`)
            .send({
                title: "Test Update",
                description: "Description test",
            });
        expect(res.statusCode).toBe(200);

    });
});

describe("DELETE /api/notes/:id", () => {
    it("should delete a note", async () => {
        const res = await request(app).delete(
            `/api/notes/${id}`
        );
        expect(res.statusCode).toBe(200);
    });
});
/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});