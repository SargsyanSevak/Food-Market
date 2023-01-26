import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


function Welcome({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.heading}>Добро пожаловать</Text>
                <Text style={styles.paragraph}>Регистрирутесь или зайдите в уже существующий аккаунт</Text>
            </View>
            <View style={styles.btnGroup}>
                <View>
                    <TouchableOpacity style={styles.contained} onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.containedText}>Войти</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.outlined}>
                        <Text style={styles.outlinedText}>Зарегистрироватся</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        gap: 100
    },
    screen: {
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: 35,
        lineHeight: 47,
        textAlign: 'center',
        letterSpacing: -0.333333,
        color: '#3C6954',
    },

    heading: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 34,
        lineHeight: 40,
        textAlign: 'center',
        letterSpacing: -0.333333,
        color: '#333333'
    },
    paragraph: {
        marginVertical: 15,
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 17,
        lineHeight: 20,
        textAlign: 'center',
        letterSpacing: -0.333333,
        color: '#545454'
    },
    contained: {
        color: '#FFFFFF',
        backgroundColor: '#3C6954',
        paddingHorizontal: 130,
        paddingVertical: 10,
        borderRadius: 8,
    },
    outlined: {
        backgroundColor: '#FFF8ED',
        paddingHorizontal: 70,
        paddingVertical: 10,
        borderRadius: 8,
        borderColor: '#3C6954',
        marginTop: 24,
        borderWidth: 1,
    },
    containedText: {
        color: '#FFFF',
        fontSize: 18,
    },
    outlinedText: {
        fontSize: 18,
        color: '#333333',
    }
});

export default Welcome;