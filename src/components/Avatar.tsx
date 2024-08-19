import profileImage from "../assets/profile.png";

export default function Avatar() {
    return (
        <a className="avatar mb-8" href="#about">
            <div className="w-24 rounded-full m-auto">
                <img src={profileImage} alt="Profile Picture" />
            </div>
        </a>
    );
}
