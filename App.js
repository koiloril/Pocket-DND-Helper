import { StatusBar } from 'expo-status-bar';
import { StyleSheet,
   Text, 
   View, 
   Button, 
   ScrollView, 
   TextInput, 
   TouchableOpacity, 
   Switch, 
   ActivityIndicator,
   Alert,
   Image
  } from 'react-native';
import React,{ useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [gender,setGender] = useState('Мужской');
  const [isAgree,setIsAgree] = useState(false);
  const [isStatusOn,setIsStatusOn] = useState(true);
  const [data,setData] = useState("01.01.2024");
  const [time,setTime] = useState("14:00");
  const [isSubmitting,setIsSubmitting] = useState(false);
  const [resultMessage,setResultMessage] = useState();

  const RadioButton = ({label, selected, onSelect}) =>{
    <TouchableOpacity
    style={[styles.radioOption, selected && styles.radioSelected]}
    onPress={onSelect}
    >
        <Text style={selected ? {color: "#fff"} : {color: "#000"}}>{label}</Text>
    </TouchableOpacity>
  }

  const handleSubmit = () => {
    if (setIsSubmitting) return;
    setIsSubmitting(true);
    Alert.alert("Уведомление", "Кнопка нажата! UI элементы работают.");

    setTimeout(() => {
      setIsSubmitting(false);
      setResultMessage(`Форма была успешно отправлена!
        Имя: ${name}
        Пол: ${gender}
        Согласие: ${isAgree ? 'Да' : 'Нет'}
        Статус: ${isStatusOn ? 'Активен' : 'Неактивен'}
        Дата/Время: ${date} в ${time}`);
    }, 1500);
  };
  

  return (
    <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.contentContainer}>
      <View style={styles.linearLayout}>
        <Text style={styles.tvTitle}>Форма регистрации</Text>
        <TextInput 
        style={styles.input}
        placeholder="Введите имя"
        onChangeText={setName}
        value={name}
        keyboardType="default"
        placeholderTextColor="#777"
        />

        <TextInput
        style={styles.input}
        placeholder="Введите пароль"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholderTextColor="#777"
        />

        <Text style={styles.label}>Пол:</Text>
        <View style={styles.radioGroup}>
          <RadioButton
          label="Мужской"
          selected={gender === 'Мужской'}
          onSelect={() => setGender('Мужской')}
          />
          <RadioButton
          label="Женский"
          selected={gender === 'Женский'}
          onSelect={() => setGender('Женский')}
        />
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.labelCheckbox}>Согласие на оброботку данных</Text>
          <Switch
            onValueChange={setIsAgree}
            value={isAgree}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.labelCheckbox}>Статус: {isStatusOn ? 'Активаен' : 'Неактивен'}</Text>
          <Switch
            onValueChange={setIsStatusOn}
            value={isStatusOn}
          />
        </View>


        <Text style={styles.label}>Выбирите время регистрации (24ч):</Text>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="ЧЧ:ММ"
          placeholderTextColor="#777"
          />

          <Button
            title={isSubmitting ? "Отправка..." : "Отправить данные"}
            onPress={handleSubmit}
            disabled={isSubmitting}
          />

          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.progressBar}
            animating={isSubmitting}
          />


          <Image
            source={{uri: "https://reactnative.dev/img/tiny_logo.img"}}
            style={styles.imageView}
            resizeMode="cover"
          />

          <Text style={styles.tvResult}>{resultMessage}</Text>

      </View>
      <StatusBar style="auto"/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollViewContainer: {
    flex:1,
    backgroundColor:"#fff",
  },
  contentContainer: {
    paddingVertical: 30,
    minHeight: '100%'
  },
  tvTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label:{
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 600,
  },
  labelCheckbox:{
    fontSize: 16,
    fontWeight: '400',
  },
  input:{
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  radioGroup:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
  radioOption:{
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#eee',
    marginRight: 15,
  },
  radioSelected:{
    backgroundColor: '#841583',
  },
  checkboxContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressBar:{
    marginVertical: 15,
  },
  imageView:{
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 10,
  },
  tvResult:{
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    backgroundColor: "#e6ffe6",
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    marginBottom: 50,
  }
});
