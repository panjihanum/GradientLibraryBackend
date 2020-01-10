'use strict'

const Filter = use("App/Models/Filter")

class FilterController {
    async index({request, response, view}){
        const filter = await Filter.query()
            .with("category")
            .with("ebook")
            .with("ebook.picture")
            .fetch()
        return response.status(200).json({
            status: 1,
            data: filter
        })
    }
    async show({params, response}){
        const filter =await Filter.query()
            .where("id", params.id)
            .with("category")
            .with("ebook")
            .with("ebook.picture")
            .fetch()
        return response.status(200).json({
            status: 1,
            data: filter
        })
    }
    
}

module.exports = FilterController
