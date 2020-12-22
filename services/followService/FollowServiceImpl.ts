
import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

import { FollowService, DB, USERS_KEY, FOLLOWINGS_KEY } from "./FollowService"

class FollowServiceImpl implements FollowService {
    private db: firebase.database.Database

    constructor() {
        this.db = firebase.database()
    }

    async getFollowers(userId: string, callback: (res: any) => void): Promise<any> {
        let key = "/" + [FOLLOWINGS_KEY] + "/" + [userId] + "/"
        this.db.ref(key).once('value', (snapshot: any) => {
            return new Promise((resolve, reject) => {
                resolve(callback(snapshot.val())), reject(null)
            })
        }, (err: any) => {
            console.log(err?.message)
        })
    }

    getFollowing(userId: string): string[] | null {
        return null
    }

    async follow(userId: string, userIdToFollow: string): Promise<boolean> {
        if (userId == userIdToFollow) {
            console.log("Cannot follow self!")
            return false
        }

        // check if the user is a valid user
        this.db.ref("/" + [USERS_KEY] + "/").once('value', (snapshot: any) => {
            let users = snapshot.val()
            if (users[userId] == null || users[userId] == undefined) {
                console.log("You are not a valid user?!")
                return false
            }

            console.log(userId + " wants to follow " + userIdToFollow)
            let key = "/" + [FOLLOWINGS_KEY] + "/" + [userIdToFollow] + "/"
            this.db.ref(key).once('value', (snapshot: any) => {
                let followers = snapshot.val()
                // entry doesn't exist
                if (!(followers == undefined || followers == null)) {
                    if (followers[userId] != undefined || followers[userId] != null) {
                        console.log("You are already following this person.")
                        return false
                    }
                }
                this.db.ref().child(key).child(userId).set(true, () => {
                    console.log("Successfully followed!")
                    return true
                })
            }, (err: any) => {
                console.log(err?.message)
            })
        })
        return await true
    }

    async unfollow(userId: string, userIdToUnfollow: string): Promise<boolean> {
        console.log(userId + " wants to unfollow " + userIdToUnfollow)
        let key = "/" + [FOLLOWINGS_KEY] + "/" + [userIdToUnfollow] + "/"
        this.db.ref(key).once('value', (snapshot: any) => {
            let followers = snapshot.val()
            // entry doesn't exist
            if (followers == undefined || followers == null || followers[userId] == undefined || followers[userId] == null) {
                console.log("You are not following this person anyways?!")
                return false
            }
            this.db.ref().child(key).child(userId).remove(() => {
                console.log("Successfully unfollowed!")
                return true
            })
        }, (err: any) => {
            console.log(err?.message)
        })

        return await false
    }
}

export const followService = new FollowServiceImpl()
export default followService