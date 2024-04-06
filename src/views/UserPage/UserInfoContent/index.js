import UserInfoAnswer from "./UserInfoAnswer";
import UserInfoChange from "./UserInfoChange";
import UserInfoFocus from "./UserInfoFocus";
import UserInfoPublish from "./UserInfoPublish";

export default function UserInfoContent({ userInfoSelectItem }) {
    const selectPage = [
        <UserInfoChange />,
        <UserInfoFocus />,
        <UserInfoPublish />,
        <UserInfoAnswer />,
    ];
    return <div>{selectPage[userInfoSelectItem]}</div>; 
}
