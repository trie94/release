
import FollowService from "./FollowService"
import { FOLLOWINGS_KEY, USERS_KEY } from "./FollowServiceConsts"

export default class FollowServiceTestImpl implements FollowService {
    private db: object

    constructor(jsonFile) {
        this.db = JSON.parse(JSON.stringify(jsonFile))
        if (this.db == null || this.db == undefined) {
            throw new Error("Parsing error!")
        }
    }

    getFollowers(userId: string): string[] {
        let followers = this.db[FOLLOWINGS_KEY][userId]
        if (followers == undefined || followers == null) {
            return null
        } else {
            return followers
        }
    }

    getFollowing(userId: string): string[] {
        throw new Error("Method not implemented.");
    }

    follow(userId: string, userIdToFollow: string): boolean {
        if (userId == userIdToFollow) {
            console.log("Cannot follow self!")
            return false
        }

        // when entry doesn't exist in the following table
        let followers = this.db[FOLLOWINGS_KEY][userIdToFollow]
        if (followers == undefined || followers == null) {
            let followings = this.db[FOLLOWINGS_KEY]
            let newFollowObject = {}
            newFollowObject[userIdToFollow] = [userId]
            Object.assign(followings, newFollowObject)
        } else {
            if (followers.includes(userId)) {
                console.log("You are already following this person.")
                return false
            }
            followers.push(userId)
        }

        console.log(userId + " successfully followed " + userIdToFollow + "!")
        console.log(this.db)
        return true
    }

    unfollow(userIdToUnfollow: string): boolean {
        throw new Error("Method not implemented.")
    }
}