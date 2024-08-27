import styled from "styled-components/native";

//componente botão de navegação
export const Container = styled.TouchableOpacity({
width:'100%',
height:56,
flexDirection: "row",
justifyContent: "space-between",
backgroundColor: "#304163",
borderRadius: 4,
alignItems: "center",
overflow: "hidden",
marginBottom:16
});

//componente de estilização de texto
export const TaskText = styled.Text({
    color: "white",
    fontSize:16,
    fontWeight: 500,
});

//componente botão marcar tarefa concluida
export const TaskDone = styled.TouchableOpacity({
width:56,
height:56,
backgroundColor: "#E88A1A",
alignItems: "center",
justifyContent: "center"

});

//componente botão excluir tarefa 
export const TaskDelete = styled.TouchableOpacity({
    width:56,
    height:56,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
});

