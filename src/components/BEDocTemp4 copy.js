import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image,PDFViewer } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer'
import img1 from '../images/17.png'
import img2 from '../images/icon111.png'
import img3 from '../images/icon2.png'
import img4 from '../images/icon3.png'
import img5 from '../images/icon4.png'
import img6 from '../images/icon5.png'
import img7 from '../images/icon6.png'
import img8 from '../images/icon7.png'
import img9 from '../images/icon8.png'

Font.register({ family: 'Roboto', src: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300&family=Roboto:wght@300&display=swap' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 30, // Add padding here
    color:'#3E3F4E',  //black
    paddingTop:30 ,
    paddingBottom:0 ,
    paddingleft:0,
    paddingRight:0,
    position:'relative',
    right:0
  },
  leftColumn: {
    width: '32%',
    padding: 0,
    backgroundColor:'#d9e6eb',
    position:'absolute',
    top:0,
    bottom:0,
    paddingLeft:10,
    paddingRight:13,
    paddingTop:35,
    left:20,
      },
  rightColumn: {
    width: '100%',
    padding: 10,
    marginLeft:'28.5%',
    paddingRight:0,
    paddingTop:10
    // paddingLeft:25
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    marginBottom:5,
    marginLeft:12,
    marginTop:5,
    letterSpacing:2,
    color:'#1E2532', //blue

  },
  designation: {
    fontSize: 15,
    margin:12,
    paddingLeft:0,
    paddingRight:5,
    textAlign:'left',
    color:'#1E2532', //blue
    marginBottom:0,
  },
  sectionTitle: {
    fontSize: 16,
    color:'#1E2532',
    marginTop:8,
    letterSpacing:1
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    paddingLeft: 9,
    paddingTop:7,
    textAlign:'justify',
    lineHeight:1.4
  },
  subTitle:{
    fontSize: 13,
    paddingLeft: 9,
    paddingTop:7,
    textAlign:'left',
  },
  subSubTitle:{
    fontSize: 10,
    paddingLeft: 9,
    paddingTop:5,
    textAlign:'left',
  },
  hobbies: {
    marginTop: 95 // Add top padding to Hobbies
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:100,
  },
  icon1:{
    width:11,
    height:12,
  },
  rightHeading:{
    marginTop: 30,
    fontSize:15,
    paddingLeft: 18,
    marginBottom:8,
    color:'#1E2532'
  },
  rightParagraph:{
    fontSize: 12,
    marginBottom: 4,
    paddingLeft: 18,
    lineHeight:1.4
  },
  rightSubHeading:{
    fontSize: 12,
    paddingLeft: 18,
    marginTop:8,
    marginBottom:4,
  },
  rightOtherHeading:{
    fontSize:13,
    paddingLeft: 18,
    marginBottom:8,
    marginTop:29,
    color:'#1E2532',
  },
  colorThisBlue:{
    color:'#1A91F0' //sky blue

  },
  colorThisGrey:{
    color:'#828BA2',
    marginBottom:'2%'
  },
  leftColColorGrey:{
    marginTop:'11%'
  },
  colorThisBlack:{
    color:'#1E2532',  //blue
    fontWeight: 'bold',
  },
  line: {
    height: 1, // Line height
    width: '20%', // 20% for the line
    backgroundColor: '#1E2532', // Line color
    marginTop: 6, // Adjust this value for spacing
    color:'#1A91F0',
    marginLeft:14,
    marginBottom:'3%',
    marginTop:'2%',

  },
  rightContent:{
    marginLeft:'6.2%',
    paddingRight:'9.2%',
    marginTop:"6%"
  },
  contentLine:{
    height: 1, // Line height
    width: 30,
    marginTop:'7%',
    marginBottom:'9%',
    backgroundColor: '#1E2532', // Line color
    marginLeft:'1.3%'
  },
  profileParagraph:{
    paddingLeft:12,
  },
  content1Line:{
    height: 1, // Line height
    width: 30,
    marginTop:'1%',
    marginBottom:'12%',
    backgroundColor: '#1E2532', // Line color
    marginLeft:'11%'
  },
  leftContactContent:{
    marginTop:'3%'
  }
});


export default function BEDocTemp3({ personalData,courses, activities,internships,hobbies,languages,references ,customSections ,skills }) {
  console.log(personalData)
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
      <View style={{ alignItems: 'center' ,padding:'4%',marginBottom:'5%'}}>
      <View style={{ alignItems: 'center' , backgroundColor:'#a9c9d7',padding:'4%',borderRadius:'100%'}}>
          <Image style={styles.image} src={img1} />
        </View>
        </View>
        <View style={styles.leftContactContent}>
      <Text style={[styles.rightHeading,styles.colorThisBlack]}>CONTACT</Text>
      <View style={styles.content1Line}></View>
          <Text style={styles.rightParagraph}>Your address goes here and gere and here and here.</Text>
          <Text style={styles.rightParagraph}>Place of Birth, 455039</Text>
          <Text style={styles.rightParagraph}>Country</Text>
          <Text style={styles.rightParagraph}>8394593959</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>email@gmail.com</Text>

          <Text style={[styles.rightSubHeading,styles.leftColColorGrey]}>DOB/Place of Birth</Text>
          <Text style={styles.rightParagraph}>Your DOB</Text>
          <Text style={styles.rightParagraph}>PlaceOfBirth</Text>

          <Text style={[styles.rightSubHeading,styles.leftColColorGrey]}>Nationality</Text>
          <Text style={styles.rightParagraph}>Your Nationality</Text>
 
          <Text style={[styles.rightSubHeading,styles.leftColColorGrey]}>Driving Liscence</Text>
          <Text style={styles.rightParagraph}>DSJFDtionality</Text>

          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>LINKS</Text>
          <View style={styles.content1Line}></View>

          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>www.google.com</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>www.yahoo.com</Text>

          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>SKILLS</Text>
          <View style={styles.content1Line}></View>

          <Text style={[styles.rightParagraph]}>Skill 1</Text>
          <Text style={[styles.rightParagraph]}>Skill 2</Text>
          <Text style={[styles.rightParagraph]}>Skill 3</Text>
          <Text style={[styles.rightParagraph]}>Skill 4</Text>
          <Text style={[styles.rightParagraph]}>Skill 5</Text>

          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>LANGUAGES</Text>
          <View style={styles.content1Line}></View>

          <Text style={styles.rightParagraph}>languages 1</Text>
          <Text style={styles.rightParagraph}>languages 2</Text>

          
          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>HOBBIES</Text>
          <View style={styles.content1Line}></View>

          <Text style={styles.rightParagraph}>Hobby 1 , Hobby 2 , Hobby 3</Text>
      </View>
      </View>

      <View style={styles.rightColumn}>
      <View style={{alignItems: 'left',width:"100%" , backgroundColor:"#f5f5f5",paddingRight:'10%',paddingLeft:'5%',paddingTop:'5%',paddingBottom:'2%',marginTop:'-2%'}}>
      <View style={{alignItems: 'left', marginTop:8,width:"100%" }}>
      <Text style={styles.designation}>Senior Software Developer</Text>
            <Text style={styles.name}>{personalData.firstName} {personalData.middleName} {personalData.lastName}</Text>
            <View style={styles.line}></View>
          
       </View>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Profile</Text>
          </View>
        </View> */}
        <Text style={[styles.paragraph,styles.profileParagraph]}>Your profile go here of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </Text>
</View>
<View style={styles.rightContent}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            <View style={styles.contentLine}></View>

          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.contentLine}></View>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>INTERNSHIPS</Text>
            <View style={styles.contentLine}></View>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>REFERENCES</Text>
            <View style={styles.contentLine}></View>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>COURSES</Text>
            <View style={styles.contentLine}></View>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>EXTRA-CURRICULUM ACTIVITIES</Text>
            <View style={styles.contentLine}></View>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>MORE ABOUT ME</Text>
            <View style={styles.contentLine}></View>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
        </View>
      </View>
    </Page>
  </Document>
  );
}
