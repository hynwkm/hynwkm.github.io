import profileImage from "../../assets/profile.png";

export default function Avatar() {
    return (
        <div className="avatar flex justify-center mt-8">
            <div className="w-24 rounded">
                <img src={profileImage} alt="Profile Picture" />
            </div>
        </div>
    );
}
