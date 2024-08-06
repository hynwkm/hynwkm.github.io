import profileImage from "../../assets/profile.png";

export default function Avatar() {
    return (
        <div className="avatar flex justify-center mt-8">
            <a className="w-24 rounded" href="#">
                <img src={profileImage} alt="Profile Picture" />
            </a>
        </div>
    );
}
