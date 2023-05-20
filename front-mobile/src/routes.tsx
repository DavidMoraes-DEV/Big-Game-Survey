import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import CreateRecord from './pages/CreateRecord';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{cardStyle: {
                backgroundColor: '#0B1f34'
            },
            headerShown: false
            }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='CreateRecord' component={CreateRecord} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;