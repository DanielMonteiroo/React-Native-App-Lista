import styled from "styled-components/native";

//componente de visualização de tarefas
export const Container = styled.View({
padding:12,
flexDirection: "column",
backgroundColor: "white",
borderRadius: 9,
alignItems: "center",
overflow: "hidden",
gap:8
});

//componente de texto exibido no card
export const CardTitle = styled.Text({
color: "#304163",
fontSize:16,
fontWeight:500
});

//componente de texto com valor exibido no card
export const CardValue = styled.Text({
    color: "#304163",
    fontSize:24,
    fontWeight:600
    });