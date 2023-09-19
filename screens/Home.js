import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'
import { Button, Layout, Text, Input } from '@ui-kitten/components';

export default function Home({ navigation }) {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');


    return (
        <Layout
            style={styles.container}
            level='1'
        >
            <Input
                placeholder='Place your Text'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
            <Button style={styles.Button} onPress={() => setCounter(counter + 1)}>
                BUTTON
            </Button>

            <Text style={styles.text}>
                {`Pressed ${counter} times`}
            </Text>

        </Layout>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 200
    },
    text: {
        marginHorizontal: 8,
        
    },
    Button: {
        marginTop: 20
    }
});
