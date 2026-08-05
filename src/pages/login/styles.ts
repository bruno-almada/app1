import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },


    boxTop: {
        height: Dimensions.get('window').height / 1,
        width: '100%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    boxMid: {
        height: Dimensions.get('window').height / 2,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 37,

    },
    boxBottom: {
        height: Dimensions.get('window').height / 1,
        width: '100%',
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        width: 180,
        height: 250,
        marginTop: -50,
    },

    text: {
        fontWeight: 'bold',
        marginTop: -300,
        textAlign: 'center',
        marginBottom: 20,
        fontSize: 20,
    },


    button: {
        width: 150,
        height: 40,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8a8989',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 2,
            height: 4,

        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,

    },
    textButton: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
        borderColor: '#000',
    },


    remember: {
        flexDirection: 'row',
    },

    rememberText: {
        fontSize: 14,
        color: 'gray',

    },

    boxInput: {
        width: '100%',
        marginBottom: 12,
    },

    label: {
        position: 'absolute',
        left: 8,
        top: -8,
        fontSize: 12,
        color: '#666',
        backgroundColor: 'transparent',
        paddingHorizontal: 4,
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: '#fafafa',
        width: '100%',
    },


})