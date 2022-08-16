import axios from "axios";

const BASE_URL = 'https://express-shina.ru/vacancy/geo-state'

const instance = axios.create({
    baseURL: BASE_URL
})

export type Points = {
    pickPoints: PickPoint[]
}

export type PickPoint = {
    address: string
    budgets: string[]
    latitude: number
    longitude: number
}

export const api = {
    getPoints() {
        return instance.get<Points>('')
            .then(resp=>resp.data.pickPoints)
    },
}