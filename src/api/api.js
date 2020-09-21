import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "5ad3586e-7a98-4b52-b2dc-5b0cc6951332"
    }
})


export const apiUsers = {
    getUsers(requestPage = 1, pageSize = 10) {
        return instance.get(`users?page=${requestPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then(response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data)
    }
}

export const apiProfile = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const apiAuth = {
    me: () => instance.get(`auth/me`),
    login: (email, password, rememberMe, captcha) => {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout: () => {
        return instance.delete(`auth/login`)
    }
}

export const apiSecurity = {
    captcha: () => instance.get(`security/get-captcha-url`)

}


