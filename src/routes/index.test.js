import request from 'supertest'
import { app } from '../index.js'

test('should create a user', async () => {


    const testUser = {
        name: 'Marcelina',
        age: 1000,
        isAlive: false,
        id: '12345'
    }

    const createUserResponse = await request(app).post('/').send(testUser)

    expect(createUserResponse.status).toBe(200)
    expect(createUserResponse.body).toEqual({ status: 'criado' })

    const getUserResponse = await request(app).get(`/${testUser.id}`)
    expect(getUserResponse.status).toEqual(200)
    expect(getUserResponse.status).not.toEqual(404)
    expect(getUserResponse.body).toEqual(testUser)

})