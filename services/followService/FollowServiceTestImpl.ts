
import { FollowService, FOLLOWINGS_KEY, USERS_KEY, DB } from "./FollowService"
const testuserDb = require('../../servicesTest/followService/testUsers.json')


class FollowServiceTestImpl implements FollowService {
    private db: DB

    constructor(jsonFile: object) {
        this.db = JSON.parse(JSON.stringify(jsonFile)) as DB
        if (this.db == null || this.db == undefined) {
            throw new Error("Parsing error!")
        }
    }

    async getFollowers(userId: string, callback: () => void): Promise<any> {
        let followers = this.db[FOLLOWINGS_KEY][userId]
        if (followers == undefined || followers == null) {
            return null
        } else {
            callback()
            return followers
        }
    }

    getFollowing(userId: string): string[] | null {
        throw new Error("Method not implemented.");
    }

    async follow(userId: string, userIdToFollow: string): Promise<boolean> {
        if (userId == userIdToFollow) {
            console.log("Cannot follow self!")
            return false
        }

        // when entry doesn't exist in the following table
        let followers = this.db[FOLLOWINGS_KEY][userIdToFollow]
        if (followers == undefined || followers == null) {
            let followings = this.db[FOLLOWINGS_KEY]
            Object.assign(followings, { [userIdToFollow]: userId })
        } else {
            if (followers[userId] != null || followers[userId] != undefined) {
                console.log("You are already following this person.")
                return false
            }
            followers[userId] = true
        }

        console.log(userId + " successfully followed " + userIdToFollow + "!")
        console.log(this.db)
        return true
    }

    unfollow(userId: string, userIdToUnfollow: string): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
}

export const followService = new FollowServiceTestImpl(testuserDb)
export default followService