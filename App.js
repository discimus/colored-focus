import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import MainTemplate from './src/templates/MainTemplate'

import { globalStyles } from './styles/global'

const sendAlertMessage = () => {
    // alert('Hello, World!')
}

export default function App() {
    return (
        <View style={[globalStyles.container, globalStyles.maxHeight]}>
            <MainTemplate></MainTemplate>
            {/* <StatusBar style="dark" /> */}
        </View>
    );
}
