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
