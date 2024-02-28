import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './Styles';

export function Participant() {
    return(
        <View style={styles.Container}>
            <Text style={styles.name}>
                Pedro Lucas
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}