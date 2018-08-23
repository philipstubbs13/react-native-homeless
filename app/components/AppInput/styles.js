import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';
const INPUT_HEIGHT= 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    $buttonBackgroundColorBase: '$white',
    $buttonBackgroundColorModifier: 0.1,
    
    container: {
        backgroundColor: '$white',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
    },
    containerDisabled: {
       backgroundColor: '$lightGray', 
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    text: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$white',
    },
    input: {
        fontSize: 18,
        paddingHorizontal: 16,
        color: '$inputText',
        backgroundColor: '$white',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '$border',
    },
    border: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
    },
});