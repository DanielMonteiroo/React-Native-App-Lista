import { Feather } from "@expo/vector-icons";
import { Container, ContainerStatus, StatusButtonDelete, StatusCard, StatusIcon, StatusText, StatusTextContainer, TextStatus, Title, TitleContainer, TopButton, TopContainer, TopText } from './styles';
import { RootStackParamList} from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Details(){
const {task} = useContext(TaskContext);
const navigation = useNavigation<Props['navigation']>();

    return(

        <Container>
          
           <TopContainer>
                <TopButton onPress={()=>navigation.popToTop()}>
                    <Feather name='chevrons-left' size={24} color={"white"}></Feather>
                    <TopText>Voltar</TopText>
                </TopButton>
           
           </TopContainer>
         
          <TitleContainer>
          <Title>{task.title}</Title>
          </TitleContainer>
        
          <TextStatus>Status da Tarefa:</TextStatus>
         
          <ContainerStatus>
            <StatusCard>
                <StatusIcon style={task.status ? {backgroundColor:'#0e9577'}: {}}>
                {!task.status && <Feather name = 'square' size={24} color={"white"}/>} 
                {task.status && <Feather name = 'check-square' size={24} color={"white"}/>}
                </StatusIcon>
               
                <StatusTextContainer>
                    <StatusText>{task.status ? "Realizada" : "Em aberto"}</StatusText>
                </StatusTextContainer>
            </StatusCard>
           
            <StatusButtonDelete>
                <Feather name='trash-2' size={24} color={'white'}></Feather>
            </StatusButtonDelete>
        
          </ContainerStatus>

        </Container>


    );
}