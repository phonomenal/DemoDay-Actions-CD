// index.js

/**
 * Required External Modules
 */

const express = require("express");
var bodyParser = require('body-parser')
const path = require("path");
const { Octokit } = require("@octokit/rest");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";


/**
 *  App Configuration
 */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
  });



app.post('/user', async (req, res) => {

    // try
    // {
    //     const username = req.body.username
    //     //...
    //     var userData = await getUser(username)
        
    //     var user_created_at = userData.created_at

    //     var created_at_dateFormat = user_created_at.split('T')
    //     var dateFormatted = created_at_dateFormat[0]

    //     res.render("user", { title: "Profile", userProfile: 
    //     { handle: userData.login, avatar_url: userData.avatar_url, bio: userData.bio, html_url: userData.html_url, 
    //         company: userData.company, location: userData.location, created_at: dateFormatted} });
    // }
    // catch(error) 
    // {
    //     res.render(path.join(__dirname + '/views/404.pug'), {error: error});
    // }

    res.redirect(303, '/user/' + req.body.username)
})

app.get('/user/:handle', async (req, res) => {
    console.log("GET - requesting user handle: " + req.params.handle)

    try
    {
        var username = req.params.handle
        //...
        var userData = await getUser(username)
        
        var user_created_at = userData.created_at

        var created_at_dateFormat = user_created_at.split('T')
        var dateFormatted = created_at_dateFormat[0]

        res.render("user", { title: "Profile", userProfile: 
        { handle: userData.login, avatar_url: userData.avatar_url, bio: userData.bio, html_url: userData.html_url, 
            company: userData.company, location: userData.location, created_at: dateFormatted} });
    }
    catch(error) 
    {
        res.render(path.join(__dirname + '/views/404.pug'), {error: error});
    }
})

// app.get('*', function(req, res){
//     res.render(path.join(__dirname + '/views/404.pug'));
// });

/**
 * Server Activation
 */

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });


/**
 * Business Logic
 */

const octokit = new Octokit();

async function getUser(userHandle)
{
    try
    {
       const { data: user } = await octokit.users.getByUsername({
            username: userHandle
        })
        return user;
        // .then(({ user }) => {
        //     return user
        // });
    }
    catch(error)
    {
        console.log(error)
    }
}

