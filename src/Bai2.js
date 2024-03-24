import React, { useState, useCallback } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';


const Bai2 = () => {
  const [hinhAnh, setHinhAnh] = useState(null);

  const chonAnh = useCallback(() => {
    let option = {
      mediaType: 'photos',
      selectionLimit: 0
    };
    ImagePicker.launchImageLibrary(option,setHinhAnh)
  }, []);

  return (
    <View style={{ margin: 10 }}>
      <Button title='Chọn từ thư viện' onPress={chonAnh} />
      <View style={{margin:10}}></View>
      {
       (typeof(hinhAnh?.assets) !='undefined')?
         hinhAnh?.assets.map((objImage, index)=>{


           return (
             <View key={index} style={{margin:10,alignItems:"center",justifyContent:'center'}}>
               <Image key={index}
               source={{uri: objImage.uri}}
               style={{width: 200, height:200,borderRadius:100}}
               />
             </View>
           )


         })
       :''
        }

    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
    img:{
        borderRadius:50
    }
});
