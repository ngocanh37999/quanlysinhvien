import userImage from 'src/assets/images/user.svg'
class Helper {
  getAvatarUrl = (avatarName?: string) => (avatarName ? avatarName : userImage)
}
const helper = new Helper()
export default helper
