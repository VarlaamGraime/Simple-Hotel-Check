import { HOTEL_LIST, LOGIN_ROUTE } from "./utils/consts"
import Auth from './pages/Auth'
import Hotel from './pages/Hotel';

export const authRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: HOTEL_LIST,
        Component: Hotel
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: HOTEL_LIST,
        Component: Hotel
    }
    
]