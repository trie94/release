
import * as firebase from "firebase/app"
import { FollowService } from "./FollowService"

export default class FollowServiceImpl implements FollowService {
    getFollowers(userId: string): string[] {
        return null
    }
    getFollowing(userId: string): string[] {
        return null
    }
    follow(userId: string, userIdToFollow: string): boolean {
        return false
    }
    unfollow(userIdToUnfollow: string): boolean {
        return false
    }
}