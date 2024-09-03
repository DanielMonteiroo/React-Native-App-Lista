import { Feather } from "@expo/vector-icons";
import { Container, ContainerStatus, StatusButtonDelete, StatusCard, StatusIcon, StatusText, StatusTextContainer, TextStatus, Title, TitleContainer, TopButton, TopContainer, TopText } from './styles';
import { RootStackParamList} from "../../utils/types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Details({route}: any){

const {id,title,status} = route.params;
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
          <Title>{title}</Title>
          </TitleContainer>
        
          <TextStatus>Status da Tarefa:</TextStatus>
         
          <ContainerStatus>
            <StatusCard>
                <StatusIcon style={status ? {backgroundColor:'#0e9577'}: {}}>
                {!status && <Feather name = 'square' size={24} color={"white"}/>} 
                {status && <Feather name = 'check-square' size={24} color={"white"}/>}
                </StatusIcon>
               
                <StatusTextContainer>
                    <StatusText>{status ? "Realizada" : "Em aberto"}</StatusText>
                </StatusTextContainer>
            </StatusCard>
           
            <StatusButtonDelete>
                <Feather name='trash-2' size={24} color={'white'}></Feather>
            </StatusButtonDelete>
        
          </ContainerStatus>

        </Container>


    );
}