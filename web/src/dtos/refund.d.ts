type RefundApiResponse = {
    id: string
    userId: string
    name: string
    category: CategoriesApiEnum
    amount: number
    filename: string
    user: {
        name: string
    }
}

type RefundsPaginationApiResponse = {
    refunds: RefundApiResponse[],
    pagination: {
        page: number
        parPage: number
        totalRecords: number
        totalPages: number
    }
}