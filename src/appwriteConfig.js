import { Client, Account, Databases } from 'appwrite';

export const API_ENDPOINT = 'https://cloud.appwrite.io/v1'
export const PROJECT_ID = '6663cedf001fc9cbac3e'
export const DATABASE_ID = '6663cfa5002cbcd5d186'
export const COLLECTION_ID_MESSAGES = '6663d03a001869952091'

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') 
    .setProject('6663cedf001fc9cbac3e');    

export const account = new Account(client);
export const databases = new Databases(client)

export default client;