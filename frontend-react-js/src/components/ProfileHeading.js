import './ProfileHeading.css';
import EditProfileButton from '../components/EditProfileButton';

import ProfileAvatar from 'components/ProfileAvatar'

export default function ProfileHeading(props) {
  const backgroundImage = 'url("https://assets.threebeesknees.co.uk/banners/banner.jpg")';
  const styles = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
  <div className='activity_feed_heading profile_heading'>
    <div className='title'>{props.profile.display_name}</div>
    <div className="cruds_count">{props.profile.cruds_count} Posts</div>
    <div className="banner" style={styles} >
      <ProfileAvatar id={props.profile.cognito_user_uuid} />
    </div>
    <div class="info">
      <div class='id'>
        <div className="display_name">{props.profile.display_name}</div>
        <div className="handle">@{props.profile.handle}</div>
      </div>
      <EditProfileButton setPopped={props.setPopped} />
    </div>
    <div class="bio">{props.profile.bio}</div>

  </div>
  );
}