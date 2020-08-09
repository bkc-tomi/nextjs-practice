import fetch from "fetch";
import someDatabaseSDK from "someDatabaseSDK";

// fetch APIを使用するときの例
export async function getSortedPostsDatawithFetch() {
    const res = await fetch("...");
    return res.json();
}

// databaseSDKを使用する時の例
const databaseClient = someDatabaseSDK.createClient("...");

export async function getSortedPostsDatafromDatabase() {
    return databaseClient.query("SELECT posts ...");
}