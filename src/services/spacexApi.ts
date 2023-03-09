import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CompanyI, DragonI, LandpadI, LaunchI, LaunchpadI, PayloadI, RoadsterI, RocketI, StarlinkI } from '../backend/interface'


export const spacexApi = createApi({
    reducerPath: "spacexApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.spacexdata.com/v4/" }),
    endpoints: (builder) => ({
        getRockets: builder.query<RocketI[], void>({
            query: () => `/rockets`,
        }),
        getRocketById: builder.query<RocketI, string>({
            query: (id) => `/rockets/${id}`
        }),
        getLaunchpads: builder.query<LaunchpadI[], void>({
            query: () => `/launchpads`,
        }),
        getLaunchpadById: builder.query<LaunchpadI, string>({
            query: (id) => `/launchpads/${id}`
        }),
        getLaunches: builder.query<LaunchI[], void>({
            query: () => `/launches`,
        }),
        getLaunchById: builder.query<LaunchI, string>({
            query: (id) => `/launches/${id}`
        }),
        getLandpads: builder.query<LandpadI[], void>({
            query: () => `/landpads`,
        }),
        getCompany: builder.query<CompanyI, void>({
            query: () => `/company`
        }),
        getPayloads: builder.query<PayloadI[], void>({
            query: () => `/payloads`
        }),
        getPayloadById: builder.query<PayloadI, string>({
            query: (id) => `/payloads/${id}`
        }),
        getLandpadById: builder.query<LandpadI, string>({
            query: (id) => `/landpads/${id}`
        }),
        getStarlinks: builder.query<StarlinkI[], void>({
            query: () => `/starlink`
        }),
        getRoadsterInfo: builder.query<RoadsterI, void>({
            query: () => `/roadster`
        }),
        getDragons: builder.query<DragonI[], void>({
            query: () => `/dragons`
        })
    })
})

export const {
    useGetRocketsQuery,
    useGetLandpadsQuery,
    useGetLaunchesQuery,
    useGetLaunchpadsQuery,
    useGetLaunchpadByIdQuery,
    useGetCompanyQuery,
    useGetRocketByIdQuery,
    useGetPayloadsQuery,
    useGetStarlinksQuery,
    useGetRoadsterInfoQuery,
    useGetLaunchByIdQuery,
    useGetPayloadByIdQuery,
    useGetDragonsQuery
} = spacexApi