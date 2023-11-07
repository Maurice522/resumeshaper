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
    color:'#3E3F4E',
    paddingTop:30 ,
    paddingBottom:0 ,
    paddingleft:0,
    paddingRight:15,
    position:'relative'
  },
  leftColumn: {
    width: '35%',
    padding: 0,
    color:'white',
    backgroundColor:'#102429',
    position:'absolute',
    top:0,
    bottom:0,
    paddingLeft:10,
    paddingRight:13,
    paddingTop:35
      },
  rightColumn: {
    width: '65%',
    padding: 10,
    marginLeft:'33%',
    paddingRight:4
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom:5,
    marginTop:5
  },
  designation: {
    fontSize: 15,
    margin:12,
    paddingLeft:5,
    paddingRight:5,
    textAlign:'center',
    color:'#62a844'
  },
  sectionTitle: {
    fontSize: 16,
    color:'#1E2532',
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    paddingLeft: 18,
    paddingTop:7,
    textAlign:'justify',
    lineHeight:1.4
  },
  subTitle:{
    fontSize: 13,
    paddingLeft: 18,
    paddingTop:7,
    textAlign:'left',
  },
  subSubTitle:{
    fontSize: 10,
    paddingLeft: 18,
    paddingTop:3,
    textAlign:'left',
  },
  hobbies: {
    marginTop: 95 // Add top padding to Hobbies
  },
  image: {
    width: 65,
    height: 65,
    borderRadius:100,
  },
  icon1:{
    width:11,
    height:12,
  },
  rightHeading:{
    marginTop: 25,
    fontSize:15,
    paddingLeft: 18,
    marginBottom:8,
  },
  rightParagraph:{
    fontSize: 12,
    marginBottom: 4,
    paddingLeft: 18,
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
    marginTop:13,
    color:'#16598F',
  },
  colorThisBlue:{
    color:'#62a844'

  },
  colorThisGrey:{
    color:'#828BA2'
  },
  colorThisBlack:{
    color:'white',
    fontWeight: 'bold',
  },
  line: {
    height: 1, // Line height
    width: '20%', // 20% for the line
    backgroundColor: '#1A91F0', // Line color
    marginTop: 6, // Adjust this value for spacing
    color:'#1A91F0',
  },

});


export default function BEDocTemp3({ personalData }) {
  console.log(personalData)
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
      <View style={{ alignItems: 'center' }}>
          <Image style={styles.image} src={img1} />
        </View>
        <View style={{alignItems: 'center', marginTop:8,width:"100%",paddingRight:'4%' }}>
            <Text style={styles.name}>Jaquelene Stevan</Text>
            <View style={styles.line}></View>
            <Text style={styles.designation}>Senior Software Developer</Text>
          </View>
      <Text style={[styles.rightHeading,styles.colorThisBlack]}>Personal Details</Text>
          <Text style={styles.rightParagraph}>Your address goes here and gere and here and here.</Text>
          <Text style={styles.rightParagraph}>Place of Birth, 455039</Text>
          <Text style={styles.rightParagraph}>Country</Text>
          <Text style={styles.rightParagraph}>8394593959</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>email@gmail.com</Text>

          <Text style={[styles.rightSubHeading,styles.colorThisGrey]}>DOB/Place of Birth</Text>
          <Text style={styles.rightParagraph}>Your DOB</Text>
          <Text style={styles.rightParagraph}>PlaceOfBirth</Text>

          <Text style={[styles.rightSubHeading,styles.colorThisGrey]}>Nationality</Text>
          <Text style={styles.rightParagraph}>Your Nationality</Text>
 
          <Text style={[styles.rightSubHeading,styles.colorThisGrey]}>Driving Liscence</Text>
          <Text style={styles.rightParagraph}>DSJFDtionality</Text>

          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>Links</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>www.google.com</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>www.yahoo.com</Text>

          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>Skills</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>Skill 1</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>Skill 2</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>Skill 3</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>Skill 4</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>Skill 5</Text>

          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>Languages</Text>
          <Text style={styles.rightParagraph}>languages 1</Text>
          <Text style={styles.rightParagraph}>languages 2</Text>

          
          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>Hobbies</Text>
          <Text style={styles.rightParagraph}>Hobby 1 , Hobby 2 , Hobby 3</Text>
      </View>

      <View style={styles.rightColumn}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.icon1} src={img2} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Profile</Text>
          </View>
        </View>
        <Text style={styles.paragraph}>Your profile go here of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img3} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Employment History</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img4} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Education</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img5} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Internships</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img6} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>References</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img7} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Courses</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img8} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Extra-Curriculum Activities</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img9} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Custom</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>Your profile goes here variations of passages </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>Your profile goes here variations of passages </Text>
        <Text style={styles.paragraph}>Your profile go here.here are many variations of phe Internet. It uses a dictionary </Text>

      </View>
    </Page>
  </Document>
  );
}
