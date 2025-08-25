/* API
Methods
Get: get data
post: send, create, get data
{ username "...", email: "...", "salary": 5}

- PUT: Put in the data provided, replace everything else with undefined
- PATCH: Edit/patch only provided
- DELETE: delete the data

PATCH: {username: newUsername, email: newEmail}

Soft delete a user: e.g. deleted after 30 days. isDeleted = date 25/8/25
Hard delete: user goes poof
Postman application (also vsc extension)

API, Sync, Async
await fetch()
Sync preferred by default, async when waiting for stuff to happen
 */
const catFactApiURL = "https://catfact.ninja/";
const createJobloopLocation = async (data) => {
  const response = await fetch("https://api.jobloop.no/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
const getFact = async (limit, max_length) => {
  const response = await fetch(
    `${catFactApiURL}fact?limit=${limit}&max_length=${max_length}`
  );
  console.log(response);
  const data = await response.json();
  return data;
};
getFact(5, 100).then((data) => console.log(data));

/* codes
Ok  200
Created  201  ok, new resource
Accepted  202
No Content  204
Bad Request  400  you have not provided everything requred
Unauthorized  401 I do not know whether you have permission
Forbidden  403  you do not have access to this resource
Not Found  404  no I can't find that
Method Not Allowed  405
Conflict  409
Internal Server Error  500 the server does not know what to do
Service Unavailable  503
*/ 