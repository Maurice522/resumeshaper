import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image,PDFViewer } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import img1 from '../images/22.png'
import BEDoc from './BEDoc';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
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
    fontSize: 16,
  },
  designation: {
    fontSize: 14,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  pDFViewerStyle:{
    backgroundColor:"#ffffff" ,
  }
});



export default function PdfDisplayBE({ personalData,courses, activities,internships,hobbies,languages,references ,customSections ,skills }) {
  console.log(personalData)
  return (
    <div>
      <div className='downloadPdfMainDiv'>
        <PDFViewer width={530} height={565} style={styles.pDFViewerStyle}>
          <BEDoc personalData={personalData} courses={courses} activities={activities} internships={internships} hobbies={hobbies} languages={languages} references={references} customSections={customSections} skills={skills}/>
        </PDFViewer>
      </div>
    </div>
  );
}

