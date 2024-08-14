import profileImage from "../../assets/profile.png";

export default function Avatar() {
    return (
        <div className="avatar mb-8">
            <div className="w-24 rounded-full m-auto">
                <img src={profileImage} alt="Profile Picture" />
            </div>
        </div>
    );
}
