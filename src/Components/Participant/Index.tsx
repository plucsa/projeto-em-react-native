import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './Styles';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Participant({name, onRemove}: Props) {
    return(
        <View style={styles.Container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}