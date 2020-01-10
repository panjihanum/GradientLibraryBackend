'use strict'

const Category = use("App/Models/Category")
class CategoryController {
    async index({ request, response, view }){
        const category = await Category.query()
            .with("filter")
            .with("filter.ebook")
            .with("filter.ebook.picture")
            .fetch()
        return response.status(200).json({
            status: 1,
            data: category
        })
    }
    async show({params, response}){
        const category = await Category.query()
                .where("id", params.id)
                .with("filter")
                .with("filter.ebook")
                .with("filter.ebook.picture")
                .fetch()
            return response.status(200).json({
                status: 1,
                data: category
            })
    }
}

module.exports = CategoryController
