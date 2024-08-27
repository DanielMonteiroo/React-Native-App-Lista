import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { CardNumber } from './src/componentes/CardNumber';
import { InputAddTask } from './src/componentes/InputAddTask';
import { Task } from './src/componentes/Task';

export default function App() {
 
  //Estado da lista de tarefas com descricao e de inicio com array vazio
  const [tasks,setTasks] = useState<{descricao:string; check:boolean}[]>([]);

  const [taskText,setTaskText] = useState("");

  const [countTask,setCountTask] =  useState(0);

  function handleTaskAdd(){
    //Verifica se a tarefa foi adicionada
    if(taskText == ''){
      return Alert.alert("Erro: Tarefa sem descrição!");
    }
    
    //Verifica se já existe tarefa cadastrada com mesmo nome
    if(tasks?.some((Task)=>Task.descricao === taskText)){
      return Alert.alert("Erro: Tarefa já existe!");
    }

    //Guardar informação de tarefa cadastrada
    const newTask = {descricao: taskText, check: false};
    setTasks([...tasks, newTask]);
    setTaskText(''); 
  }

  //Função para incrementar no contador a quantidade de tarefas cadastradas
  useEffect(()=> {
      let totalTasks = tasks.length;  
      setCountTask(totalTasks);  
  },[tasks] );


  return (
    <View style={styles.container}>
         
      <StatusBar style="auto" />
      
      <InputAddTask 
      onPress={handleTaskAdd} 
      onChangeText={setTaskText}
      value={taskText}>
      </InputAddTask>

       <View style={{flexDirection:"row",gap:16}}>
           <CardNumber></CardNumber>
           <CardNumber></CardNumber>
           <CardNumber></CardNumber>
       </View>     
     
      
      <Text style={{color:'white',fontWeight:'bold'}}>Tarefas: {countTask}</Text>

      <FlatList
      data={tasks}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={
        ({item})=>(
          <Task></Task>
        )
      }
      ListEmptyComponent={()=>(
        <View>
          <Text style={{color:'white',textAlign:'center'}}>Você ainda não cadastrou tarefas!</Text>
          <Text style={{color:'white',textAlign:'center'}}>Crie uma tarefa para começar!</Text>
        </View>
      )
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28385E',
    alignItems: 'center',
    justifyContent: 'center',
    padding:16,
    paddingTop:64,
    gap:16
  },

  InputContainer:{
   flexDirection: 'row',
   borderRadius:4,
   backgroundColor:'#202830'
  },

  Input:{
   flex:1,
   padding:16,
   color:'white'
  },

  InputButton:{
  backgroundColor:'#121729',
  padding:16,
  borderRadius:4
  }
});


