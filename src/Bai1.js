import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import * as ImagePicker from 'react-native-image-picker';
import { PermissionsAndroid } from 'react-native';

const Bai1 = () => {

    const [hinhAnh, sethinhAnh] = useState(null)
    const chupAnh = useCallback(async () => {
        
        let opition = {
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true
        }
        // khởi động camera để chụp ảnh     
        // ImagePicker.lauchCamera(opition, sethinhAnh)
        // ImagePicker.launchCamera(opition, sethinhAnh);
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'Ứng dụng cần quyền truy cập vào máy ảnh',
                    message: 'Vui lòng cho phép ứng dụng truy cập vào máy ảnh để chụp ảnh.',
                    buttonPositive: 'Đồng ý',
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // Quyền đã được cấp, có thể chụp ảnh
                ImagePicker.launchCamera(opition, sethinhAnh);
            } else {
                console.log('Quyền truy cập vào máy ảnh bị từ chối.');
            }
        } catch (err) {
            console.warn(err);
        }
    })
    useEffect(() => {
        console.log(hinhAnh);
    })
    return (
        <View>
            <TouchableOpacity>
                <Text onPress={chupAnh}>Bai1</Text>

            </TouchableOpacity>
        </View>
    )
}


export default Bai1

const styles = StyleSheet.create({})