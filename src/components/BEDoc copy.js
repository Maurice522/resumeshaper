import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image,PDFViewer } from '@react-pdf/renderer';
import { Font } from '@react-pdf/renderer'
import img1 from '../images/17.png'
import img2 from '../images/icon11.png'
import img3 from '../images/icon22.png'
import img4 from '../images/icon33.png'
import img5 from '../images/icon44.png'
import img6 from '../images/icon55.png'
import img7 from '../images/icon66.png'
import img8 from '../images/icon77.png'
import img9 from '../images/icon88.png'

Font.register({ family: 'Roboto', src: 'https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300&family=Roboto:wght@300&display=swap' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    padding: 30, // Add padding here
    color:'#3E3F4E',
    
  },
  leftColumn: {
    width: '70%',
    padding: 10,
  },
  rightColumn: {
    width: '30%',
    padding: 10,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginTop:10,
    paddingBottom:3,
  },
  designation: {
    fontSize: 14,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color:'#16598F',
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    paddingLeft: 18,
    paddingTop:5,
    textAlign:'justify',
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
    width: 64,
    height: 64,
  },
  icon1:{
    width:10,
    height:12,
  },
  rightHeading:{
    marginTop: 95,
    fontSize:13,
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
    color:'#1A91F0'
  },
  colorThisGrey:{
    color:'#828BA2'
  },
  colorThisBlack:{
    color:'#171717',
    fontWeight: 'bold',
  }

});


export default function BEDoc({ personalData,courses, activities,internships,hobbies,languages,references ,customSections ,skills }) {
  console.log(personalData,"Courses",courses,"Courses", activities,"Courses",internships,"Courses",hobbies,"Courses",languages,"Courses",references ,"Courses",customSections ,"Courses",skills)
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.leftColumn}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
          <Image style={styles.image} src={img1} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.name}>{personalData.firstName} {personalData.middleName} {personalData.lastName}</Text>
            <Text style={styles.designation}>{personalData.jobTitle}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image style={styles.icon1} src={img2} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Profile</Text>
          </View>
        </View>
        <Text style={styles.paragraph}>{personalData.professionalSummary}</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img3} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Employment History</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>{personalData.employmentHistory.jobTitle} at {personalData.employmentHistory.employer} , {personalData.employmentHistory.city}</Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}> {personalData.employmentHistory.startDate} - {personalData.employmentHistory.endDate}</Text>
        <Text style={styles.paragraph}>{personalData.employmentHistory.description} </Text>
      
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img4} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Education</Text>
          </View>
        </View>
        
        <Text style={styles.subTitle}>{personalData.educationHistory.school} , {personalData.educationHistory.city}</Text>
        <Text style={styles.colorThisBlack}>{personalData.educationHistory.degree}</Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>{personalData.educationHistory.startDate} - {personalData.educationHistory.endDate} </Text>
        <Text style={styles.paragraph}>{personalData.educationHistory.description} </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img5} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Internships</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>{internships.jobTitle} at {internships.employer}, {internships.city} </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>{internships.startDate} - {internships.endDate} </Text>
        <Text style={styles.paragraph}>{internships.description}</Text>
      
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img6} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>References</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>{references.fullName}, {references.company} </Text>
        <Text style={styles.paragraph}>{references.phone}</Text>
        <Text style={[styles.paragraph,styles.colorThisBlue]}>{references.email}</Text>
   

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img7} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Courses</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>{courses.course}</Text>
        <Text style={styles.paragraph}>{courses.institution} </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>{courses.startDate} - {courses.endDate}</Text>
        <Text style={styles.paragraph}>{courses.description} </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img8} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>Extra-Curriculum Activities</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>{activities.funtion}, {activities.employer} </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>{activities.startDate} - {activities.endDate} </Text>
        <Text style={styles.paragraph}>{activities.description} </Text>
      

        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop:'10'}}>
          <Image style={styles.icon1} src={img9} />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.sectionTitle}>{customSections.title}</Text>
          </View>
        </View>
        <Text style={styles.subTitle}>{customSections.subTitle} </Text>
        <Text style={[styles.subSubTitle,styles.colorThisGrey]}>{customSections.startDate} - {customSections.endDate} </Text>
        <Text style={styles.paragraph}>{customSections.description} </Text>
      
      </View>

      <View style={styles.rightColumn}>

      <Text style={[styles.rightHeading,styles.colorThisBlack]}>Personal Details</Text>
          <Text style={styles.rightParagraph}>{personalData.address}</Text>
          <Text style={styles.rightParagraph}>{personalData.city},{personalData.pincode}</Text>
          <Text style={styles.rightParagraph}>{personalData.country}</Text>
          <Text style={styles.rightParagraph}>{personalData.phone}</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>{personalData.inputEmail}</Text>

          <Text style={[styles.rightSubHeading,styles.colorThisGrey]}>DOB/Place of Birth</Text>
          <Text style={styles.rightParagraph}>{personalData.dateOfBirth}</Text>
          <Text style={styles.rightParagraph}>{personalData.placeOfBirth}</Text>

          <Text style={[styles.rightSubHeading,styles.colorThisGrey]}>Nationality</Text>
          <Text style={styles.rightParagraph}>{personalData.nationality}</Text>
 
          <Text style={[styles.rightSubHeading,styles.colorThisGrey]}>Driving Liscence</Text>
          <Text style={styles.rightParagraph}>{personalData.drivingLicense}</Text>

          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>Links</Text>
          <Text style={styles.rightParagraph}>{personalData.websitesAndLinks.name}</Text>
          <Text style={styles.rightParagraph}>{personalData.websitesAndLinks.link}</Text>


          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>Skills</Text>
          <Text style={[styles.rightParagraph,styles.colorThisBlue]}>Skill 1</Text>

          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>Languages</Text>
          <Text style={styles.rightParagraph}>{languages.language}</Text>
          <Text style={styles.rightParagraph}>{languages.level}</Text>

          
          <Text style={[styles.rightOtherHeading,styles.colorThisBlack]}>Hobbies</Text>
          <Text style={styles.rightParagraph}>{hobbies}</Text>
      </View>
    </Page>
  </Document>
  );
}







