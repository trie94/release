
import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

import { FollowService, DB, USERS_KEY, FOLLOWINGS_KEY } from "./FollowService"

class FollowServiceImpl implements FollowService {
    private db: firebase.database.Database

    constructor() {
        this.db = firebase.database()
    }

    async getFollowers(userId: string): Promise<any> {
        let key = "/" + [FOLLOWINGS_KEY] + "/" + [userId] + "/"
        return this.db.ref(key).once('value').then((snapshot: any) => {
            return new Promise((resolve, reject) => {
                resolve(this.mapToUserArray(snapshot.val())), reject(null)
            })
        }, (err: any) => {
            console.log(err?.message)
        })
    }

    getFollowing(userId: string): string[] | null {
        return null
    }

    async follow(userId: string, userIdToFollow: string): Promise<boolean> {
        console.log(userId + " wants to follow " + userIdToFollow)

        if (userId == userIdToFollow) {
            console.log("Cannot follow self!")
            return false
        }
        // check if the user is a valid user
        const checkValidUser: Promise<boolean> = this.db.ref("/" + [USERS_KEY] + "/").once('value').then((snapshot: any) => {
            let users = snapshot.val()
            return !(users[userId] == null || users[userId] == undefined || users[userIdToFollow] == null || users[userIdToFollow] == undefined)
        })

        const key = "/" + [FOLLOWINGS_KEY] + "/" + [userIdToFollow] + "/"
        const checkCurrentlyNotFollowing: Promise<boolean> = this.db.ref(key).once('value').then((snapshot: any) => {
            let followers = snapshot.val()
            // entry doesn't exist
            if (!(followers == undefined || followers == null)) {
                return true
            }
            // if entry exists, check if the user is already following
            if (followers[userId] != undefined || followers[userId] != null) {
                return false
            }

            return true
        })

        const follow: Promise<boolean> = this.db.ref().child(key).child(userId).set(true).then((res) => {
            return (res == null) ? true : false
        })

        return checkValidUser.then((res: boolean) => {
            if (res) {
                return checkCurrentlyNotFollowing.then((res: boolean) => {
                    if (res) { return follow } else return false
                })
            } else return false
        })

        // return Promise.all([checkValidUser, checkCurrentlyNotFollowing, follow]).then((res) => {
        //     return res[0] && res[1] && res[2]
        // })
    }

    async unfollow(userId: string, userIdToUnfollow: string): Promise<boolean> {
        console.log(userId + " wants to unfollow " + userIdToUnfollow)

        if (userId == userIdToUnfollow) {
            console.log("Cannot unfollow self!")
            return false
        }

        const key = "/" + [FOLLOWINGS_KEY] + "/" + [userIdToUnfollow] + "/"

        const checkCurrentlyFollowing: Promise<boolean> = this.db.ref(key).once('value').then((snapshot: any) => {
            let followers = snapshot.val()
            if (!(followers == undefined || followers == null) && (followers[userId] == undefined || followers[userId] == null)) {
                console.log("You are not following this person anyways?!")
                return false
            }
            return true
        })

        const unfollow: Promise<boolean> = this.db.ref().child(key).child(userId).remove().then((res: any) => {
            return (res == null) ? true : false
        })

        return checkCurrentlyFollowing.then((res: boolean) => {
            if (res) { return unfollow } else return false
        })

        // return Promise.all([checkCurrentlyFollowing, unfollow]).then((res) => {
        //     return res[0] && res[1]
        // })
    }

    mapToUserArray(snapshot: object): string[] {
        let res: string[] = []
        Object.keys(snapshot).map((key) => {
            res.push(key)
        })

        return res
    }
}

export const followService = new FollowServiceImpl()
export default followService