const supertest = require('supertest')
const server = require('../index')
const db = require('../data/config')

let token

beforeEach(async () => {
	await db.seed.run()
})

beforeAll(async (done) => {
	supertest(server)
		.post('/users/login')
		.send({
			username: 'dean',
			password: 'password'
		})
		.end((err, response) => {
			token = response.body.token
			done()
		})
})

afterAll(async () => {
	await db.destroy()
})

describe('test user router', () => {
	it("GET '/' should require authorization", async () => {
		const res = await supertest(server).get('/users')
		expect(res.statusCode).toBe(401)
	})

	it("GET '/' with authorization", async () => {
		const res = await supertest(server).get('/users').set('cookie', `token=${token}`)
		console.log(res)
		expect(res.statusCode).toBe(200)
	})
})
