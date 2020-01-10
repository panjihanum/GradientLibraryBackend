'use strict'

const Ebook = use("App/Models/Ebook")
const Filter = use("App/Models/Filter")
const Category = use("App/Models/Category")
class EbookController {
    async index({request, response, view}){
        let pagination = request.only(["page", "limit"]);
        const page = parseInt(pagination.page, 10) || 1;
        const limit = parseInt(pagination.limit, 10) || 10;
        const ebook = await Ebook.query()
            .with("filter")
            .with("author")
            .with("picture")
            .paginate(page, limit)
            ebook.toJSON();
        return response.status(200).json({
            ...ebook,
            status: 1
        })
    }
    async indexbycategory({params, response}){
        const filter = await Filter.query()
                .where("category_id", params.id)
                .fetch()
        
        let all = filter.rows.map(val => {
            return val.id
        })
        
        const ebook = await Ebook.query()
                .whereIn("filter_id", all)
                .with("picture")
                .fetch()
        return response.status(200).json({
            ebook: ebook
        })
        
        
    }


}

module.exports = EbookController
