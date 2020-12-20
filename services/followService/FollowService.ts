
export interface FollowService {
    // returns an array of follower user ids.
    getFollowers(userId: string): string[]
    // returns an array of followings of the user.
    getFollowing(userId: string): string[]
    // returns true if the current user successfully has followed the input user. False otherwise.
    follow(userId: string, userIdToFollow: string): boolean
    // returns true if the current user successfully has unfollowed the input user. False otherwise.
    unfollow(userIdToUnfollow: string): boolean
}

export const USERS_KEY = "users"
export const FOLLOWINGS_KEY = "followings"