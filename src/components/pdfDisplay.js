import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
   
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default function MyPdfViewer({ personaldata }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <br/>
          <Text style={styles.title}>Software Developer Resume</Text>
          <br/>
          <Text>Name:{personaldata.firstName}</Text>
          <br/>
          
        </View>
      </Page>
    </Document>
  );
}

