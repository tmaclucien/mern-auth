// ? 没搞懂这里的逻辑

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl: ""})

const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({})
})

export default apiSlice