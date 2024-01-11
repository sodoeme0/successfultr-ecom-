import { apiSlice } from "../../app/api/apiSlice"
import { logOut, setCredentials } from "./authSlice"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        // login endpoint
        login: builder.mutation({
            query: credentials => ({
                url: '/user',
                method: 'POST',
                body: { ...credentials }
            })
        }),

        // sendLogout endpoint
        sendLogout: builder.mutation({
            query: () => ({
                url: '/user/logout',
                method: 'POST',
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    console.log(data)
                    dispatch(logOut())
                    setTimeout(() => {
                        dispatch(apiSlice.util.resetApiState())
                    }, 1000)
                } catch (err) {
                    console.log(err)
                }
            }
        }),
    })
})
export const {
    useLoginMutation,
    useSendLogoutMutation
} = authApiSlice 