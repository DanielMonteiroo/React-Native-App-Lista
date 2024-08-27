import { Feather } from '@expo/vector-icons';
import { Container, TaskDelete, TaskDone, TaskText } from './styles';

export function Task(){
    return(

     <Container>
        <TaskDone>
          <Feather name = 'square' size={24} color={"white"}></Feather>
        </TaskDone>
        
        <TaskText>Tarefa</TaskText>
        
        <TaskDelete>
        <Feather name = 'trash-2' size={24} color={"white"}/>
        </TaskDelete>
     </Container>

    );
}