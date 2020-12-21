
import * as firebase from "firebase/app"
import { FollowService } from "./FollowService"

export default class FollowServiceImpl implements FollowService {
    getFollowers(userId: string): string[] | null {
        return null
    }
    getFollowing(userId: string): string[] | null {
        return null
    }
    follow(userId: string, userIdToFollow: string): boolean {
        return false
    }
    unfollow(userIdToUnfollow: string): boolean {
        return false
    }
}