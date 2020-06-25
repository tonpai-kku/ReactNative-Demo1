// Module Addition Part.
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import ProfileDescriptionCard from './ProfileDescriptionCard';


//  Display Part.
export default function App(){
  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ประวัติส่วนตัว</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.profileImage}
          source={ require('./assets/profile-image.jpg') }
        />
      </View>
      <ProfileDescriptionCard
        iconName="md-person"
        text="นายธนดล รัศมีเพ็ญ"
      />
      <ProfileDescriptionCard
        iconName="ios-at"
        text="tutor.pai@gmail.com"
      />
      <ProfileDescriptionCard
        iconName="logo-instagram"
        text="tutor-pai"
      />
      <ProfileDescriptionCard
        iconName="logo-facebook"
        text="Wittayakorn Pai"
      />
      <ProfileDescriptionCard
        iconName="ios-fitness"
        text="Weight Training, Body Weight, วิ่งออกกำลังกาย"
      />
      <ProfileDescriptionCard
        iconName="ios-briefcase"
        text="โปรแกรมเมอร์"
      />
      <ProfileDescriptionCard
        iconName="ios-gift"
        text="1 มกราคม 2540"
      />
      <ProfileDescriptionCard
        iconName="md-school"
        text="มหาวิทยาลัยขอนแก่น"
      />
      <ProfileDescriptionCard
        iconName="md-brush"
        text="อ่านหนังสือ, วาดรูป, ฟังเพลง"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom:50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});