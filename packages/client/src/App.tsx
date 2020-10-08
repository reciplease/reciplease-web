import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text } from 'react-native';

// import useCachedResources from './hooks/useCachedResources';
// import useColorScheme from './hooks/useColorScheme';
// import Navigation from './navigation';

function App() : React.FunctionComponent {
  const isLoadingComplete = true;
  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    // <Navigation colorScheme={colorScheme} />
   return (
     <SafeAreaProvider>
       <StatusBar />
       <Text>BRB Just Having Breakfast</Text>
     </SafeAreaProvider>
   );
  }
}


export default App;