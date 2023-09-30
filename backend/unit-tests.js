import request from 'supertest';

const testUsername = "unitTestUser1";

export async function UnitTest(app) {
    console.log("Testing user signup without phone number")
    await request(app)
      .post('/user/signup')
      .send({
        user: {
            username: testUsername,
            name: "UnitTest",
            qualifiers: {
            "publicHousing":true,
            "EBT":true,
            "SNAP":true
        }
        }
    })
      .set('Accept', 'application/json')
      .expect(200, `"User added: ${testUsername}"`); 

    console.log("Testing user deletion")
    await request(app)
    .delete(`/cashier/${testUsername}`)
    .send()
    .set('Accept', 'application/json')
    .expect(200, `"User, associated purchase history, and income category deleted"`); 

    console.log("Testing user signup with phone number")
    await request(app)
      .post('/user/signup')
      .send({
        user: {
            username: testUsername,
            name: "UnitTest",
            qualifiers: {
            "publicHousing":true,
            "EBT":true,
            "SNAP":true
            },
            phoneNumber:"1234567890"
        }
    })
      .set('Accept', 'application/json')
      .expect(200, `"User added: ${testUsername}"`); 

    console.log("Testing user deletion")
      await request(app)
      .delete(`/cashier/${testUsername}`)
      .send()
      .set('Accept', 'application/json')
      .expect(200, `"User, associated purchase history, and income category deleted"`); 
    console.log("Finished");
}