
// REWRITE USING ASYNC AWAIT:
// rewrite this example code using async/await instead of .then/.catch

function loadJson(url) {
    return fetch(url)
       /* .then(response => */{
        if (response.status == 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      });
  }
  
  loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404



// RESULT:

async function loadJson(url){
    let response = await fetch(url);

    if(response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}
loadJson('https://javascript.info/no-such-user.json')
    .catch(alert);

/* ABOVE CODE EXPLAINED 

1. the function loadJson becomes async

2. all .then inside are replaced with await

3. we can return response.json() instead of awaiting for it, like this:
    if (response.status == 200){
        return response.json();
    }
    then the outer code would have to await for that promise to resolve. in our case it doesnt matter

4. the error thrown from loadJson is handled by .catch. we can't use await loadJson() there, bcus we're not in an async function
*/





// REWRITE "RETHROW" WITH ASYNC/AWAIT 
// below you can find the 'rethrow' rewriting async/await instead of .then/.catch

// & get rid of the recursion in favor of a loop in demoGithubUser with 'async/await' that becomes easy to do


class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  function loadJson(url) {
    return fetch(url)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        } else {
          throw new HttpError(response);
        }
      });
  }
  
  // Ask for a user name until github returns a valid user
  function demoGithubUser() {
    let name = prompt("Enter a name?", "iliakan");
  
    return loadJson(`https://api.github.com/users/${name}`)
      .then(user => {
        alert(`Full name: ${user.name}.`);
        return user;
      })
      .catch(err => {
        if (err instanceof HttpError && err.response.status == 404) {
          alert("No such user, please reenter.");
          return demoGithubUser();
        } else {
          throw err;
        }
      });
  }
  
demoGithubUser();


// RESULT:
// there are no tricks here. just replace .catch with try..catch inside demoGithubUser & add async/await where needed:

class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }

  async function loadJson(url){
    let response = await fetch(url);

    if(response == 200){
        return response.json();
    }else{
        throw new HttpError(response);
    }
  }


// Ask for a user name until github returns a valid user

async function demoGithubUser(){

    let user;
    while(true){
        let name = prompt("Enter a name?", "Iliakan");

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break; // no error, exit loop
        } catch (err){
            if (err instanceof HttpError && err.response.status == 404){
                // loop continues after the alert
                alert("No such user, please reenter.");
            } else {
                // unknown error, rethrow
                throw err;
            }
        }
    }
    alert(`Full name: ${user.name}.`)
    return user;
}
demoGithubUser();



// CALL ASYNC FROM NON-ASYNC
// we have a "regular" function called f. how can you call the async function wait() & use its results inside of f?

// P.S. the task's technically very simple, but the question's quite common for developers new to async/await

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}
  
  function f() {
    // ...what should you write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
}



// RESULT:

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
}
  
  function f() {
    // shows 10 after 1 second
    wait().then(result => alert(result));
}
  
f();

// that's the case when knowing how it works inside's helpful
// just treat async call as promise and attach .then to it