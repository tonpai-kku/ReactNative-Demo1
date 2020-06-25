import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function ({text, iconName, iconColor, }) {
    return (
        <View style={styles.profileDescriptionContainer}>
            <View style={styles.profileDescriptionIconContainer}>
                <Ionicons name={iconName} size={32} color={iconColor||"gray"} />
            </View>
            <View style={styles.profileDescriptionDetailContainer}>
                <Text style={styles.profileDescriptionDetail} numberOfLines={1}>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileDescriptionContainer: {
        flex: 1,
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        alignItems: 'stretch',
        padding: 10,
        borderRadius: 10,
        marginBottom: 8,
    },
    profileDescriptionIconContainer: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileDescriptionDetailContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginLeft: 8,
        marginRight: 8,
    },
    profileDescriptionDetail: {
        fontSize: 16,
    }
});
