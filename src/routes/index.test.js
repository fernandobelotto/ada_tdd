import request from 'supertest'
import { app } from '../index.js'

const testUser = {
    name: 'Marcelina',
    age: 1000,
    isAlive: false,
    id: '12345'
}

test('should create a user and return the same user from get by id', async () => {




    const createUserResponse = await request(app).post('/').send(testUser)

    expect(createUserResponse.status).toBe(200)
    expect(createUserResponse.body).toEqual({ status: 'criado' })

    const getUserResponse = await request(app).get(`/${testUser.id}`)
    expect(getUserResponse.status).toEqual(200)
    expect(getUserResponse.status).not.toEqual(404)
    expect(getUserResponse.body).toEqual(testUser)

})


it('should return a list with one user', async () => {

    const getAllResponse = await request(app).get('/')
    expect(getAllResponse.body).toHaveLength(1)
    expect(getAllResponse.status).toBe(200)
})


it('should return a empty list', async () => {


    const deleteResponse = await request(app)
        .delete(`/${testUser.id}`)

    expect(deleteResponse.body).toEqual(testUser)
    expect(deleteResponse.status).toBe(200)

    const getAllResponse = await request(app).get('/')
    expect(getAllResponse.body).toHaveLength(0)
    expect(getAllResponse.status).toBe(200)
})