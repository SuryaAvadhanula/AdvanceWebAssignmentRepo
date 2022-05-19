import router from "../router";

import * as users from "../models/user";
import { useMessages } from "./messages";
import { api } from "./myFetch";
import { defineStore } from "pinia";
import { User } from "../models/user";


export const useSession = defineStore('session', {
    state: () => ({
        user: null as users.User | null,
        destinationUrl: null as string | null,
        users: null as [] | null,
    }),
    actions: {
        async Login(email: string, password: string) {
            const messages = useMessages();       
            try { 
                const user = await this.api("users/login", { email, password });
                if(user) {
                    messages.notifications.push({
                        type: "success",
                        message: `Welcome back ${user.firstName}!`,
                    });
                    this.user = user;
                    router.push( '/wall');
                }
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                console.table(messages.notifications)
            }
        },
        async Register(firstName: string, lastName: string, handle: string, password: string,email: string){
                 await this.api("users/register", { firstName, lastName, handle, password, email});
        },
        
        Logout() {
            this.user = null;
            router.push('/login');
        },

        async api(url: string, data?: any, method?: 'GET' | 'POST' | 'PUT' | 'DELETE', headers: any = {}) {
            const messages = useMessages();

            if(this.user?.token) {
                headers.Authorization = `Bearer ${this.user.token}`;
            }

            try {
                const response = await api(url, data, method, headers);
                if(response.errors?.length) {
                    throw { message: response.errors.join(', ') };
                }
                return await response.data;                
            } catch (error: any) {
                messages.notifications.push({
                    type: "danger",
                    message: error.message,
                });
                //console.table(messages.notifications)
            }

        },

        async fetchAllUsers() {
            const users = await this.api('users/getAllUsers');
            this.users = users;
        },
        async fetchSearchBarUsers(value: string) {
            return await this.api('users/getUsersBySearchBar', {value});
        },
    },
})

export interface ApiResult {
    data: any;
    errors?: string[];
    success: boolean;
}