import { Feather } from '@expo/vector-icons';
import { Input, InputButton, InputContainer } from './styles';

//Definindo o tipo como propriedade
type Props = {
  onPress: () => void;
  onChangeText: (text: string) => void;
  value: string;
}

export function InputAddTask({onPress,onChangeText,value}:Props){

    return(
      <InputContainer>
      <Input 
      placeholder='Digite a tarefa' 
      placeholderTextColor='white' 
      keyboardType='default'
      value={value} 
      onChangeText={onChangeText}
      ></Input>
      
      <InputButton onPress={onPress}>
      <Feather name='plus-square' size={24} color={'white'}></Feather>
      </InputButton>
          
      </InputContainer>


    );

}