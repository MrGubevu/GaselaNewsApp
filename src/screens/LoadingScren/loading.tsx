// import React, { useState, useEffect } from 'react';
// import { View, Image, Text } from 'react-native';
// import logo from '../../assets/logo.png'

// const Loading = ({ children }: { children: React.ReactNode }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 4000); 

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 100  }}>
//         <Image style={{ width: 300, height: 100,  }} source={logo}/>
//         <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Factual. Reliable. On Time</Text>
//       </View>
//     );
//   }

//   return <>{children}</>;
// };

// export default Loading;