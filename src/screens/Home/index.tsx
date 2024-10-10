
import { useContext, useEffect, useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { CardNumber } from '../../componentes/CardNumber';
import { InputAddTask } from '../../componentes/InputAddTask';
import { Task } from '../../componentes/Task';
import { TaskContext } from '../../context/TaskContext';
import { TaskProps } from '../../utils/types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TaskText } from '../../componentes/Task/styles';

export default function Home() {
 
  const {tasks,createTask,setTasks} = useContext(TaskContext)

  const [countTask,setCountTask] =  useState(0);

  const TaskSchema = Yup.object().shape({
   TaskText: Yup.string()
   .min(4,"Mínimo 4 caracteres")
   .max(16,"Máximo 16 caracteres")
   .required("Tarefa não pode ser vazia")
  });

 
  function handleTaskAdd(taskText: string){
     
    //Verifica se já existe tarefa cadastrada com mesmo nome
    if(tasks?.some((Task)=>Task.title === taskText)){
      return Alert.alert("Erro: Tarefa já existe!");
    }
    createTask(taskText);
  }

  //Função para mudar o status da tarefa
  function handleTaskChangeStatus(taskToChange:TaskProps){
     const updatedTasks = tasks.filter((Task) => Task.title !== taskToChange.title);
     
     const newTask={
      title: taskToChange.title,
      id: taskToChange.id, //Se a tarefa está em aberto,ela fecha e vice versa.
      status: !taskToChange.status 
    }
     updatedTasks.push(newTask);//Atualização da tarefa
     setTasks(updatedTasks);
  }


   //Função para deletar a tarefa ao clicar no botão
  function handleTaskDelete(taskToDelete:TaskProps){
   Alert.alert("Atenção!", `Deseja remover a tarefa ${taskToDelete.title}?` ,
   [
    {text: "Sim",
      onPress: () =>{
      const updatedTasks = tasks.filter((Task) => Task.title != taskToDelete.title)
      setTasks(updatedTasks);
    }
    },
    {text: "Cancelar", style:"cancel"} 
   ]
  )
 }

  //Função para incrementar no contador a quantidade de tarefas cadastradas
  useEffect(()=> {
      let totalTasks = tasks.length;  
      setCountTask(totalTasks);  
  },[tasks] );


  return (
    <View style={styles.container}>

      <Formik initialValues={{TaskText: ''}}
      validationSchema={TaskSchema}
      onSubmit={(values,{resetForm})=>{
       handleTaskAdd(values.TaskText)
       resetForm({values: {TaskText:''}})
      }}
      >
        {({handleSubmit,handleChange,handleBlur,values,errors,touched}) =>(
         <View>
         <InputAddTask onPress={handleSubmit} onChangeText={handleChange('taskText')} 
         onBlur={handleBlur('taskText')}
         value={values.TaskText}>
         </InputAddTask>

         {touched.TaskText && errors.TaskText && (
          <Text style={{color:'red'}}>{errors.TaskText}</Text>
         )}

         </View>
        )}  
      
      </Formik>      

       <View style={{flexDirection:"row",gap:16}}>
           <CardNumber title={"Cadastradas"} num={countTask} color='#1a1c27'></CardNumber>
          
           <CardNumber title={"Em Aberto"} num={countTask} color='#b5a914'></CardNumber>
                      
           <CardNumber title={"Finalizadas"} num={0} color='#00a200'></CardNumber>
       </View>     
     
      
      <Text style={{color:'white',fontWeight:'bold'}}>Tarefas: {countTask}</Text>

      <FlatList
      data={tasks}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={
        ({item})=>(
          <Task 
          id={item.id}
          title={item.title}
          status={item.status}
          onCheck={()=>handleTaskChangeStatus(item)}
          onRemove={()=>handleTaskDelete(item)}>
          </Task>
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


