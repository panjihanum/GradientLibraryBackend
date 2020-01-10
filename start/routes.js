'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
    Route.resource("category", "CategoryController")
        .apiOnly()
        .except(['index', 'show'])
    Route.resource("discussion", "DiscussionController")
        .apiOnly()
        .except(['index', 'show'])
    Route.resource("ebook", 'EbookController')
        .apiOnly()
        .except(['index', 'show'])
    Route.resource("filter", "FilterController")
        .apiOnly()
        .except(['index', 'show'])
    Route.resource("reply", "ReplyController")
        .apiOnly()
        .except(['index', 'show'])
    Route.get("ebook/:id", "EbookController.indexbycategory")
    })
    .prefix("api/v1")

    Route.group(() => {
        Route.resource("category", "CategoryController")
            .apiOnly()
            .except(["store", "update", "destroy"])
        Route.resource("discussion", "DiscussionController")
            .apiOnly()
            .except(["store", "update", "destroy"])
        Route.resource("ebook", 'EbookController')
            .apiOnly()
            .except(["store", "update", "destroy"])
        Route.resource("filter", "FilterController")
            .apiOnly()
            .except(["store", "update", "destroy"])
        Route.resource("reply", "ReplyController")
            .apiOnly()
            .except(["store", "update", "destroy"])
        Route.post("users/register", "AuthUserController.register");
        Route.post("users/login", "AuthUserController.login")
        Route.get("users/data", "AuthUserController.getProfile")
    })
    .prefix("api/v1")