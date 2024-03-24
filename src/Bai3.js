import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import TrackPlayer from 'react-native-track-player';

const Bai3 = () => {
  useEffect(() => {
    setupPlayer();
  }, []);

  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add({
      id: '1',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: 'Bai hat 1',
      artist: 'Nghe si 1',
    });
    await TrackPlayer.add({
      id: '2',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      title: 'Bai hat 2',
      artist: 'Nghe si 2',
    });
    // Thêm các bài hát khác vào đây
  };

  const playMusic = async () => {
    await TrackPlayer.play();
  };

  const pauseMusic = async () => {
    await TrackPlayer.pause();
  };

  const skipToNextSong = async () => {
    await TrackPlayer.skipToNext();
  };

  const skipToPreviousSong = async () => {
    await TrackPlayer.skipToPrevious();
  };

  return (
    <View>
      <Button title="Play" onPress={playMusic} />
      <Button title="Pause" onPress={pauseMusic} />
      <Button title="Next" onPress={skipToNextSong} />
      <Button title="Previous" onPress={skipToPreviousSong} />
    </View>
  );
};

export default Bai3;
